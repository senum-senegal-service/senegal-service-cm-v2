import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalConfirmationComponent } from 'src/app/shared/components/modal-confirmation/modal-confirmation.component';

@Component({
  selector: 'app-view-annonce',
  templateUrl: './view-annonce.component.html',
  styleUrl: './view-annonce.component.scss',
})
export class ViewAnnonceComponent {
  annonceId: string;
  constructor(public dialog: MatDialog) {}

  handleChangeState() {
    const data = {
      message: `Changer l'état de validation !`,
      btnMessage: 'Confirmer',
      btnStyle: 'btn-success',
    };
    this.openDialogDelete(this.annonceId, data);
  }

  handleUnPublish() {
    const data = {
      message: `Confirmer la dépublicaion de l'annonce !`,
      btnMessage: 'Confirmer',
    };
    this.openDialogDelete(this.annonceId, data);
  }

  handlePublish() {
    const data = {
      message: `Confirmer la publication de l'annonce !`,
      btnMessage: 'Confirmer',
      btnStyle: 'btn-success',
    };
    this.openDialogDelete(this.annonceId, data);
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
