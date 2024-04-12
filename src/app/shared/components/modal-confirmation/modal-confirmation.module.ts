import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalConfirmationComponent } from './modal-confirmation.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [ModalConfirmationComponent],
  imports: [CommonModule, MatDialogModule, MatIconModule, FlexLayoutModule],
  exports: [ModalConfirmationComponent],
})
export class ModalConfirmationModule {}
