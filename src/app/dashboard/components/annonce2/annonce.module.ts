import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnnonceRoutingModule } from './annonce-routing.module';
import { AnnonceComponent } from './annonce.component';
import { OverviewComponent } from './components/overview/overview.component';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';
import { AnnonceFormComponent } from './components/annonce-form/annonce-form.component';
import { CreateAnnonceComponent } from './components/create-annonce/create-annonce.component';
import { EditAnnonceComponent } from './components/edit-annonce/edit-annonce.component';
import { AnnonceModlaFilterComponent } from './components/annonce-modla-filter/annonce-modla-filter.component';

@NgModule({
  declarations: [
    AnnonceComponent,
    OverviewComponent,
    AnnonceFormComponent,
    CreateAnnonceComponent,
    EditAnnonceComponent,
    AnnonceModlaFilterComponent,
  ],
  imports: [CommonModule, AnnonceRoutingModule, MaterialModule],
})
export class AnnonceModule {}
