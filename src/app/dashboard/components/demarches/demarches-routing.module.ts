import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { DemarchesComponent } from './demarches.component';
import { OverviewComponent } from './components/overview/overview.component';
import { CreateDemarcheComponent } from './components/create-demarche/create-demarche.component';
import { EditDemarcheComponent } from './components/edit-demarche/edit-demarche.component';

const routes: Routes = [
  {
    path: '',
    component: DemarchesComponent,

    children: [
      {
        path: '',
        component: OverviewComponent,
      },
      {
        path: 'create',
        component: CreateDemarcheComponent,
      },
      {
        path: ':id',
        component: EditDemarcheComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DemarchesRoutingModule {}
