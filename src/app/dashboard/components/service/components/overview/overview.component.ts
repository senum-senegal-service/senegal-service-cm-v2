import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MockService } from 'src/app/shared/services/mock.service';
import { ModalConfirmationComponent } from 'src/app/shared/components/modal-confirmation/modal-confirmation.component';
import {
  DeleteServiceGQL,
  Service,
  FetchServicesGQL,
  PaginationInfo,
  PublishServiceGQL,
  QueryDataConfigInput,
  UnPublishServiceGQL,
} from 'src/graphql/generated';
import { defaultTablePageSize } from 'src/app/shared/constants';
import { FormBuilder, FormGroup } from '@angular/forms';
import {
  debounceTime,
  distinctUntilChanged,
  Subject,
  switchMap,
  tap,
} from 'rxjs';
import { SelectOptions } from 'src/app/shared/utils/selec-options';
import { SnackBarService } from 'src/app/shared/services/snackbar.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-overview-service',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
})
export class OverviewComponent {
  data: { pagination: PaginationInfo; results: Service[] };
  currentPage: number = 1;
  pageSize: number = defaultTablePageSize;
  totalItems: number = 0;
  displayedColumns: string[] = [
    'titre',
    'resume',
    'sous-themes',
    'date-modification',
    'etat',
    'data-publication',
    'action',
  ];
  dataSource = new MatTableDataSource<any>(null);
  //filter
  dataFilter: any = null;

  selectedState: string = 'Choisir un état';
  selectedStatut: string;
  selectedHeadline: string;
  selectedProcedure: string;

  states: any[] = SelectOptions.states;
  statuts: any[] = SelectOptions.statuts;
  StatutsHeadline: any[] = SelectOptions.statutsHeadline;
  statutProcedure: any[] = SelectOptions.statutProcedure;

  filterForm: FormGroup = new FormGroup({});
  private searchTerms = new Subject<string>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private api: MockService,
    private fetchServicesGQL: FetchServicesGQL,
    public dialog: MatDialog,
    private fb: FormBuilder,
    private snackBarService: SnackBarService,
    private deleteServiceGQL: DeleteServiceGQL,
    private publishServiceGQL: PublishServiceGQL,
    private unPublishServiceGQL: UnPublishServiceGQL,
    private activatedRoute: ActivatedRoute
  ) {
    this.getServices(false);
    this.filterForm = this.fb.group({
      teleprocedure: [null],
      etat: [null],
      search: [null],
      est_publie: [null],
      a_la_une: [null],
    });
    this.searchTerms
      .pipe(
        debounceTime(500), // Attendre 500ms après chaque frappe avant de lancer la requête
        distinctUntilChanged(), // Ignorer la recherche si la même requête est répétée
        tap((term: string) => this.getServices())
      )
      .subscribe((r) => {});
  }

  getFilters() {
    const value: any = { ...this.filterForm.value };
    Object.keys(value).map((k) => {
      if (value[k] == null || k == 'search') {
        delete value[k];
      }
    });
    return value;
  }

  ngAfterViewInit() {
    if (this.data && this.data.results) {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
  }

  getAllUser() {
    this.api.getAllUsers().subscribe((resp) => {
      this.dataSource.data = resp;
    });
  }

  getServices(useCache=true) {
    const serviceFilter = this.getFilters();
    const queryFilter = {
      limit: this.pageSize,
      page: this.currentPage,
      search: this.filterForm?.value?.search || null,
    };
    this.fetchServicesGQL
      .fetch({ queryFilter, serviceFilter }, { fetchPolicy: useCache ? 'cache-first': 'no-cache' })
      .subscribe((result) => {
        this.data = result.data.fetchServices as any;
        this.currentPage = this.data.pagination.currentPage;
        this.pageSize = this.data.pagination.pageSize;
        this.totalItems = this.data.pagination.totalItems;
        this.dataSource.data = this.data.results;
      });
  }

  changePage(event) {
    const pageIndex = event.pageIndex;
    const pageSize = event.pageSize;

    this.currentPage = pageIndex + 1;
    this.pageSize = pageSize;
    this.getServices();
  }

  handleDeleteService(id: string) {
    this.openDialogDelete(id);
  }

  handlePublishService(id: string) {
    this.openDialogPublish(id);
  }

  handleUnPublishService(id: string) {
    this.openDialogUnPublish(id);
  }

  search($event: Event) {
    this.searchTerms.next(($event.target as HTMLInputElement).value);
  }

  openDialogDelete(id: string): void {
    const dialogRef = this.dialog.open(ModalConfirmationComponent, {
      maxHeight: '90vh',
      maxWidth: '600px',
      width: '100%',
    });

    dialogRef.afterClosed().subscribe((resp) => {
      if (resp) {
        this.deleteServiceGQL.mutate({ serviceId: id }).subscribe((result) => {
          if(result.data.deleteService) {
            this.getServices(false);
          }
        });
      }
    });
  }

  openDialogPublish(id: string): void {
    const dialogRef = this.dialog.open(ModalConfirmationComponent, {
      maxHeight: '90vh',
      maxWidth: '600px',
      width: '100%',
      data: {
        message: "Veuillez confirmer la publication !",
        btnMessage: "Publier"
      }
    });

    dialogRef.afterClosed().subscribe((resp) => {
      if (resp) {
        this.publishServiceGQL.mutate({ serviceId: id }).subscribe(
          (result) => {
            if(result.data.publishService) {
              this.getServices(false);
            }
          },
          error => {
            this.snackBarService.showErrorSnackBar();
          }
        );
      }
    });
  }

  openDialogUnPublish(id: string): void {
    const dialogRef = this.dialog.open(ModalConfirmationComponent, {
      maxHeight: '90vh',
      maxWidth: '600px',
      width: '100%',
      data: {
        message: "Veuillez confirmer la dépublication !",
        btnMessage: "Dépublier"
      }
    });

    dialogRef.afterClosed().subscribe((resp) => {
      if (resp) {
        this.unPublishServiceGQL.mutate({ serviceId: id }).subscribe(
          (result) => {
            if(result.data.unPublishService) {
              this.getServices(false);
            }
          },
          error => {
            this.snackBarService.showErrorSnackBar();
          }
        );
      }
    });
  }

  truncateString(str: string): string {
    str = str || '';
    const maxLength = 80;

    if (str.length <= maxLength) {
      return str;
    } else {
      let lastSpaceIndex = str.lastIndexOf(' ', maxLength);
      if (lastSpaceIndex === -1) {
        lastSpaceIndex = maxLength;
      }
      return str.substring(0, lastSpaceIndex) + '...';
    }
  }

  onOptionSelected(value: any) {
    this.selectedState = value;
  }
}
