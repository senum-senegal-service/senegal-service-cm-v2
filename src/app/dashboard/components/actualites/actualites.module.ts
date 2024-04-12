import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActualitesRoutingModule } from './actualites-routing.module';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';
import { ActualitesComponent } from './actualites.component';
import { OverviewComponent } from './components/overview/overview.component';
import { ActualiteFormComponent } from './components/actualite-form/actualite-form.component';
import { CreateActualiteComponent } from './components/create-actualite/create-actualite.component';
import { EditActualiteComponent } from './components/edit-actualite/edit-actualite.component';
import { DropdownModule } from 'src/app/shared/directives/dropdown/dropdown.module';

@NgModule({
  declarations: [
    ActualitesComponent,
    OverviewComponent,
    ActualiteFormComponent,
    CreateActualiteComponent,
    EditActualiteComponent,
  ],
  imports: [
    CommonModule,
    ActualitesRoutingModule,
    MaterialModule,
    DropdownModule,
  ],
})
export class ActualitesModule {}
