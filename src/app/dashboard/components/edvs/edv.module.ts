import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EdvsComponent } from './edv.component';
import { EdvsRoutingModule } from './edv-routing.module';
import { OverviewComponent } from './components/overview/overview.component';
import { CreateEdvComponent } from './components/create-edv/create-edv.component';
import { EdvFormComponent } from './components/edv-form/edv-form.component';
import { EditEdvComponent } from './components/edit-edv/edit-edv.component';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';
import { DropdownModule } from 'src/app/shared/directives/dropdown/dropdown.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MultiSelectModule } from 'src/app/shared/components/multi-select/multi-select.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    EdvsComponent,
    OverviewComponent,
    CreateEdvComponent,
    EdvFormComponent,
    EditEdvComponent,
  ],
  imports: [
    CommonModule,
    EdvsRoutingModule,
    MaterialModule,
    DropdownModule,
    ReactiveFormsModule,
    FormsModule,
    MultiSelectModule,
    FlexLayoutModule,
  ],
})
export class EdvsModule {}
