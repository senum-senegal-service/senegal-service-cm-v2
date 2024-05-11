import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSortModule } from '@angular/material/sort';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { GoBackModule } from '../../directives/go-back/go-back.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import { ModalConfirmationModule } from '../../components/modal-confirmation/modal-confirmation.module';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { RouterModule } from '@angular/router';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,

    FlexLayoutModule,
    MatIconModule,

    MatPaginatorModule,
    MatTableModule,
    MatDialogModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatSlideToggleModule,

    ModalConfirmationModule,
    GoBackModule,
    FormsModule,
    ReactiveFormsModule,
    AngularEditorModule,

    RouterModule,
    MatTooltipModule,
  ],
  exports: [
    FlexLayoutModule,
    MatIconModule,

    MatPaginatorModule,
    MatTableModule,
    MatDialogModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatSlideToggleModule,

    ModalConfirmationModule,
    GoBackModule,
    FormsModule,
    ReactiveFormsModule,
    AngularEditorModule,

    Ng2GoogleChartsModule,
    RouterModule,
    MatTooltipModule,
  ],
})
export class MaterialModule {}
