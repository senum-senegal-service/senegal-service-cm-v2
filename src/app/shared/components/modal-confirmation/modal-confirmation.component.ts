import { DIALOG_DATA } from '@angular/cdk/dialog';
import { Component, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-confirmation',
  templateUrl: './modal-confirmation.component.html',
  styleUrls: ['./modal-confirmation.component.scss'],
})
export class ModalConfirmationComponent {
  message: string;
  btnMessage: string;
  btnStyle: string;
  constructor(
    public dialogRef: MatDialogRef<ModalConfirmationComponent>,
    @Inject(DIALOG_DATA) private data: any
  ) {
    this.message = data?.message || 'Confirmer la suppression !';
    this.btnMessage = data?.btnMessage || 'Supprimer';
    this.btnStyle = data?.btnStyle || 'btn-danger';
  }

  onNoClick(): void {
    this.dialogRef.close(false);
  }

  handleDelete() {
    this.dialogRef.close(true);
  }

  cancel() {
    this.dialogRef.close();
  }
}
