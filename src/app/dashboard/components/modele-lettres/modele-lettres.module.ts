import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModeleLettresRoutingModule } from './modele-lettres-routing.module';
import { ModeleLettresComponent } from './modele-lettres.component';
import { OverviewComponent } from './components/overview/overview.component';
import { ModeleLettresFormComponent } from './components/modele-lettres-form/modele-lettres-form.component';
import { CreateModeleLettresComponent } from './components/create-modele-lettres/create-modele-lettres.component';
import { EditModeleLettresComponent } from './components/edit-modele-lettres/edit-modele-lettres.component';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';

@NgModule({
  declarations: [
    ModeleLettresComponent,
    OverviewComponent,
    ModeleLettresFormComponent,
    CreateModeleLettresComponent,
    EditModeleLettresComponent,
  ],
  imports: [CommonModule, ModeleLettresRoutingModule, MaterialModule],
})
export class ModeleLettresModule {}
