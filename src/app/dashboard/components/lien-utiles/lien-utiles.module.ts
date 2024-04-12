import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LienUtilesComponent } from './lien-utiles.component';
import { LienUtilesRoutingModule } from './lien-utiles-routing.module';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';
import { OverviewComponent } from './components/overview/overview.component';
import { CreateLienUtilesComponent } from './components/create-lien-utiles/create-lien-utiles.component';
import { EditLienUtilesComponent } from './components/edit-lien-utiles/edit-lien-utiles.component';
import { LienUtilesFormComponent } from './components/lien-utiles-form/lien-utiles-form.component';

@NgModule({
  declarations: [
    LienUtilesComponent,
    OverviewComponent,
    CreateLienUtilesComponent,
    EditLienUtilesComponent,
    LienUtilesFormComponent,
  ],
  imports: [CommonModule, LienUtilesRoutingModule, MaterialModule],
})
export class LienUtilesModule {}
