import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemarchesComponent } from './demarches.component';
import { DemarchesRoutingModule } from './demarches-routing.module';
import { OverviewComponent } from './components/overview/overview.component';
import { CreateDemarcheComponent } from './components/create-demarche/create-demarche.component';
import { DemarcheFormComponent } from './components/demarche-form/demarche-form.component';
import { EditDemarcheComponent } from './components/edit-demarche/edit-demarche.component';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';
import { DropdownModule } from 'src/app/shared/directives/dropdown/dropdown.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MultiSelectModule } from 'src/app/shared/components/multi-select/multi-select.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    DemarchesComponent,
    OverviewComponent,
    CreateDemarcheComponent,
    DemarcheFormComponent,
    EditDemarcheComponent,
  ],
  imports: [
    CommonModule,
    DemarchesRoutingModule,
    MaterialModule,
    DropdownModule,
    ReactiveFormsModule,
    FormsModule,
    MultiSelectModule,
    FlexLayoutModule,
  ],
})
export class DemarchesModule {}
