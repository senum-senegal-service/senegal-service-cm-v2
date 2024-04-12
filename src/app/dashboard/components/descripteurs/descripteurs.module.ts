import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DescripteursRoutingModule } from './descripteurs-routing.module';
import { DescripteursComponent } from './descripteurs.component';
import { OverviewComponent } from './components/overview/overview.component';
import { CreateDescripteursComponent } from './components/create-descripteurs/create-descripteurs.component';
import { EditDescripteursComponent } from './components/edit-descripteurs/edit-descripteurs.component';
import { DescripteursFormComponent } from './components/descripteurs-form/descripteurs-form.component';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';

@NgModule({
  declarations: [
    DescripteursComponent,
    OverviewComponent,
    CreateDescripteursComponent,
    EditDescripteursComponent,
    DescripteursFormComponent,
  ],
  imports: [CommonModule, DescripteursRoutingModule, MaterialModule],
})
export class DescripteursModule {}
