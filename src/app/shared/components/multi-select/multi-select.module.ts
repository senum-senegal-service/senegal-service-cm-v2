import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MultiSelectComponent } from './multi-select.component';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from '../../directives/dropdown/dropdown.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DropdownModule,
    FlexLayoutModule
  ],
  declarations: [MultiSelectComponent],
  exports: [MultiSelectComponent]
})
export class MultiSelectModule { }
