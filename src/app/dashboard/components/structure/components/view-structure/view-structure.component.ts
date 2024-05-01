import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalConfirmationComponent } from 'src/app/shared/components/modal-confirmation/modal-confirmation.component';

@Component({
  selector: 'app-view-structure',
  templateUrl: './view-structure.component.html',
  styleUrl: './view-structure.component.scss',
})
export class ViewStructureComponent {
  structureId: string;

  constructor(public dialog: MatDialog) {}

  handleChangeState() {
    const data = {
      message: `Changer l'état de validation !`,
      btnMessage: 'Confirmer',
      btnStyle: 'btn-success',
    };
    this.openDialogDelete(this.structureId, data);
  }

  handleUnPublish() {
    const data = {
      message: `Confirmer la dépublicaion du service !`,
      btnMessage: 'Confirmer',
    };
    this.openDialogDelete(this.structureId, data);
  }

  handlePublish() {
    const data = {
      message: `Confirmer la publication du service !`,
      btnMessage: 'Confirmer',
      btnStyle: 'btn-success',
    };
    this.openDialogDelete(this.structureId, data);
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
