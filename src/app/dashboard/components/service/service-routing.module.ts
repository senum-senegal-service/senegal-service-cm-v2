import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ServicesComponent } from './service.component';
import { OverviewComponent } from './components/overview/overview.component';
import { CreateServiceComponent } from './components/create-service/create-service.component';
import { EditServiceComponent } from './components/edit-service/edit-service.component';

const routes: Routes = [
  {
    path: '',
    component: ServicesComponent,

    children: [
      {
        path: '',
        component: OverviewComponent,
      },
      {
        path: 'create',
        component: CreateServiceComponent,
      },
      {
        path: ':id',
        component: EditServiceComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServicesRoutingModule {}
