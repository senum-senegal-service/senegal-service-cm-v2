import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StructuresComponent } from './structure.component';
import { StructuresRoutingModule } from './structure-routing.module';
import { OverviewComponent } from './components/overview/overview.component';
import { CreateStructureComponent } from './components/create-structure/create-structure.component';
import { StructureFormComponent } from './components/structure-form/structure-form.component';
import { EditStructureComponent } from './components/edit-structure/edit-structure.component';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';
import { DropdownModule } from 'src/app/shared/directives/dropdown/dropdown.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MultiSelectModule } from 'src/app/shared/components/multi-select/multi-select.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    StructuresComponent,
    OverviewComponent,
    CreateStructureComponent,
    StructureFormComponent,
    EditStructureComponent,
  ],
  imports: [
    CommonModule,
    StructuresRoutingModule,
    MaterialModule,
    DropdownModule,
    ReactiveFormsModule,
    FormsModule,
    MultiSelectModule,
    FlexLayoutModule,
  ],
})
export class StructuresModule {}
