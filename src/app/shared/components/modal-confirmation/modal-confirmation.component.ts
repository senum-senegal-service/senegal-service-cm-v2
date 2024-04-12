import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-confirmation',
  templateUrl: './modal-confirmation.component.html',
  styleUrls: ['./modal-confirmation.component.scss'],
})
export class ModalConfirmationComponent {
  constructor(public dialogRef: MatDialogRef<ModalConfirmationComponent>) {}

  onNoClick(): void {
    this.dialogRef.close(true);
  }

  handleDelete() {
    this.dialogRef.close(true);
  }

  cancel() {
    this.dialogRef.close();
  }
}
