import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnnoncesComponent } from './annonce.component';
import { AnnoncesRoutingModule } from './annonce-routing.module';
import { OverviewComponent } from './components/overview/overview.component';
import { CreateAnnonceComponent } from './components/create-annonce/create-annonce.component';
import { AnnonceFormComponent } from './components/annonce-form/annonce-form.component';
import { EditAnnonceComponent } from './components/edit-annonce/edit-annonce.component';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';
import { DropdownModule } from 'src/app/shared/directives/dropdown/dropdown.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MultiSelectModule } from 'src/app/shared/components/multi-select/multi-select.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ViewAnnonceComponent } from './components/view-annonce/view-annonce.component';

@NgModule({
  declarations: [
    AnnoncesComponent,
    OverviewComponent,
    CreateAnnonceComponent,
    AnnonceFormComponent,
    EditAnnonceComponent,
    ViewAnnonceComponent,
  ],
  imports: [
    CommonModule,
    AnnoncesRoutingModule,
    MaterialModule,
    DropdownModule,
    ReactiveFormsModule,
    FormsModule,
    MultiSelectModule,
    FlexLayoutModule,
  ],
})
export class AnnoncesModule {}
