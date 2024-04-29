import { DialogRef, DIALOG_DATA } from '@angular/cdk/dialog';
import { CommonModule } from '@angular/common';
import { Component, Inject, ViewChild } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { ModalConfirmationComponent } from 'src/app/shared/components/modal-confirmation/modal-confirmation.component';
import { SnackBarService } from 'src/app/shared/services/snackbar.service';
import { DeleteDemarcheReviewGQL, DemarcheReview, PaginationInfo } from 'src/graphql/generated';

@Component({
  selector: 'app-demarche-reviews-details-modal',
  standalone: true,
  imports: [
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatIconModule,
    CommonModule,
    FlexLayoutModule
  ],
  templateUrl: './demarche-reviews-details-modal.component.html',
  styleUrl: './demarche-reviews-details-modal.component.scss'
})
export class DemarcheReviewsDetailsModalComponent {
  displayedColumns: string[] = [
    'comment',
    'note',
    'supprimer'
  ];
  dataSource = new MatTableDataSource<any>(null);

  dataFilter: any = null;
  demarcheTitle: string;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(
    private dialogRef: DialogRef<DemarcheReviewsDetailsModalComponent>,
    public dialog: MatDialog,
    private deleteDemarcheReviewGQL: DeleteDemarcheReviewGQL,
    @Inject(DIALOG_DATA) private data: { reviews: DemarcheReview[], demarcheTitle: string },
    private snackBarService: SnackBarService
  ) {
    this.dataSource.data = data.reviews;
    this.demarcheTitle = data.demarcheTitle;
  }



  handleDeleteReview(id: string, index: number) {
    this.openDialogDelete(id, index);
  }

  close() {
    this.dialogRef.close();
  }

  openDialogDelete(id: string, index: number): void {
    const dialogRef = this.dialog.open(ModalConfirmationComponent, {
      maxHeight: '90vh',
      maxWidth: '600px',
      width: '100%',
    });

    dialogRef.afterClosed().subscribe((resp) => {
      if (resp) {
        this.deleteDemarcheReviewGQL.mutate({ demarcheReviewId: id }).subscribe(
          (result) => {
            if(result.data.deleteDemarcheReview) {
              const data = this.dataSource.data.slice();
              data.splice(index, 1);
              this.dataSource.data = data;
              this.snackBarService.showSuccessSnackBar("Commentaire supprimé avec succès!");
            }
          },
          error => {
            this.snackBarService.showErrorSnackBar();
          }
        );
      }
    });
  }
}
