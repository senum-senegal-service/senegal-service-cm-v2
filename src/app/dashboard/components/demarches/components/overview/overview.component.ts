import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MockService } from 'src/app/shared/services/mock.service';
import { ModalConfirmationComponent } from 'src/app/shared/components/modal-confirmation/modal-confirmation.component';
import {
  Demarche,
  FetchDemarchesGQL,
  PaginationInfo,
  QueryDataConfigInput,
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

@Component({
  selector: 'app-overview-demarche',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
})
export class OverviewComponent {
  data: { pagination: PaginationInfo; results: Demarche[] };
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
    'observations',
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
    private fetchDemarchesGQL: FetchDemarchesGQL,
    public dialog: MatDialog,
    private fb: FormBuilder
  ) {
    this.getDemarches();
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
        tap((term: string) => this.getDemarches())
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

  getDemarches() {
    const demarcheFilter = this.getFilters();
    const queryFilter = {
      limit: this.pageSize,
      page: this.currentPage,
      search: this.filterForm?.value?.search || null,
    };
    this.fetchDemarchesGQL
      .fetch({ queryFilter, demarcheFilter })
      .subscribe((result) => {
        this.data = result.data.fetchDemarches as any;
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
    this.getDemarches();
  }

  handleDeleteUser(id: number) {
    this.openDialogDelete(id);
  }

  search($event: Event) {
    this.searchTerms.next(($event.target as HTMLInputElement).value);
  }

  openDialogDelete(id: number): void {
    const dialogRef = this.dialog.open(ModalConfirmationComponent, {
      maxHeight: '90vh',
      maxWidth: '600px',
      width: '100%',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.api.deteleUser(id).subscribe((resp) => {
          console.log(id);
        });
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
