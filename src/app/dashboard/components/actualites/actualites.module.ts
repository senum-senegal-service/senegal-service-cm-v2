import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActualitesComponent } from './actualites.component';
import { ActualitesRoutingModule } from './actualites-routing.module';
import { OverviewComponent } from './components/overview/overview.component';
import { CreateActualiteComponent } from './components/create-actualite/create-actualite.component';
import { ActualiteFormComponent } from './components/actualite-form/actualite-form.component';
import { EditActualiteComponent } from './components/edit-actualite/edit-actualite.component';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';
import { DropdownModule } from 'src/app/shared/directives/dropdown/dropdown.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MultiSelectModule } from 'src/app/shared/components/multi-select/multi-select.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ViewActualityComponent } from './components/view-actuality/view-actuality.component';

@NgModule({
  declarations: [
    ActualitesComponent,
    OverviewComponent,
    CreateActualiteComponent,
    ActualiteFormComponent,
    EditActualiteComponent,
    ViewActualityComponent,
  ],
  imports: [
    CommonModule,
    ActualitesRoutingModule,
    MaterialModule,
    DropdownModule,
    ReactiveFormsModule,
    FormsModule,
    MultiSelectModule,
    FlexLayoutModule,
  ],
})
export class ActualitesModule {}
