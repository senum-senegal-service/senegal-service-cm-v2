import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalConfirmationComponent } from 'src/app/shared/components/modal-confirmation/modal-confirmation.component';

@Component({
  selector: 'app-view-actuality',
  templateUrl: './view-actuality.component.html',
  styleUrl: './view-actuality.component.scss',
})
export class ViewActualityComponent {
  actualityId: string = '';

  constructor(public dialog: MatDialog) {}

  handleChangeState() {
    const data = {
      message: `Changer l'état de validation !`,
      btnMessage: 'Confirmer',
      btnStyle: 'btn-success',
    };
    this.openDialogDelete(this.actualityId, data);
  }

  handleUnPublish() {
    const data = {
      message: `Confirmer la dépublicaion de l'actualité !`,
      btnMessage: 'Confirmer',
    };
    this.openDialogDelete(this.actualityId, data);
  }

  handlePublish() {
    const data = {
      message: `Confirmer la publication de l'actulaité !`,
      btnMessage: 'Confirmer',
      btnStyle: 'btn-success',
    };
    this.openDialogDelete(this.actualityId, data);
  }

  openDialogDelete(id: string, data: any): void {
    const dialogRef = this.dialog.open(ModalConfirmationComponent, {
      data: data,
      maxHeight: '90vh',
      maxWidth: '600px',
      width: '100%',
    });

    dialogRef.afterClosed().subscribe((resp) => {
      if (resp) {
        // this.deleteHubGQL.mutate({ actualityId: id }).subscribe(
        //   (result) => {
        //     if (result.data.deleteHub) {
        //       this.getHubs(false);
        //     }
        //   },
        //   (error) => {
        //     this.snackBarService.showErrorSnackBar();
        //   }
        // );
      }
    });
  }
}
