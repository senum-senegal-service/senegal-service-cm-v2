import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MockService } from 'src/app/shared/services/mock.service';
import { ModalConfirmationComponent } from 'src/app/shared/components/modal-confirmation/modal-confirmation.component';
import {
  DemarcheReview,
  DemarcheReviewMetric,
  FetchDemarcheReviewsMetricsGQL,
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
import { SnackBarService } from 'src/app/shared/services/snackbar.service';
import { DemarcheReviewsDetailsModalComponent } from '../demarche-reviews-details-modal/demarche-reviews-details-modal.component';

@Component({
  selector: 'app-overview-review',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
})
export class OverviewComponent {
  data: { pagination: PaginationInfo; results: DemarcheReviewMetric[] };
  currentPage: number = 1;
  pageSize: number = defaultTablePageSize;
  totalItems: number = 0;
  displayedColumns: string[] = [
    'demarche',
    'noteAvg',
    'numberOfReviews',
    'details'
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
    private fetchReviewsGQL: FetchDemarcheReviewsMetricsGQL,
    public dialog: MatDialog,
    private fb: FormBuilder,
    private snackBarService: SnackBarService,
  ) {
    this.getReviews(false);
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
        tap((term: string) => this.getReviews())
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

  getReviews(useCache=true) {
    const queryFilter = {
      limit: this.pageSize,
      page: this.currentPage,
      search: this.filterForm?.value?.search || null,
    };
    this.fetchReviewsGQL
      .fetch({ queryFilter }, { fetchPolicy: useCache ? 'cache-first': 'no-cache' })
      .subscribe((result) => {
        this.data = result.data.fetchDemarcheReviewsMetrics as any;
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
    this.getReviews();
  }


  search($event: Event) {
    this.searchTerms.next(($event.target as HTMLInputElement).value);
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

  showDetails(reviews: DemarcheReview[], demarcheTitle: string): void {
    const dialogRef = this.dialog.open(DemarcheReviewsDetailsModalComponent, {
      maxHeight: '90vh',
      maxWidth: '100%',
      width: '80%',
      data: { reviews, demarcheTitle}
    });

    dialogRef.afterClosed().subscribe((result) => {

    });
  }
}
