import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AnnoncesComponent } from './annonce.component';
import { OverviewComponent } from './components/overview/overview.component';
import { CreateAnnonceComponent } from './components/create-annonce/create-annonce.component';
import { EditAnnonceComponent } from './components/edit-annonce/edit-annonce.component';
import { ViewAnnonceComponent } from './components/view-annonce/view-annonce.component';

const routes: Routes = [
  {
    path: '',
    component: AnnoncesComponent,

    children: [
      {
        path: '',
        component: OverviewComponent,
      },
      {
        path: 'create',
        component: CreateAnnonceComponent,
      },
      {
        path: ':id',
        component: EditAnnonceComponent,
      },
      {
        path: 'detail/:id',
        component: ViewAnnonceComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnnoncesRoutingModule {}
