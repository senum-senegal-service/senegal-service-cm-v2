import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LienUtilesComponent } from './lien-utiles.component';
import { OverviewComponent } from './components/overview/overview.component';
import { CreateLienUtilesComponent } from './components/create-lien-utiles/create-lien-utiles.component';
import { EditLienUtilesComponent } from './components/edit-lien-utiles/edit-lien-utiles.component';

const routes: Routes = [
  {
    path: '',
    component: LienUtilesComponent,

    children: [
      {
        path: '',
        component: OverviewComponent,
      },
      {
        path: 'create',
        component: CreateLienUtilesComponent,
      },
      {
        path: ':id',
        component: EditLienUtilesComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LienUtilesRoutingModule {}
