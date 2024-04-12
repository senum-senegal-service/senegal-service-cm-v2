import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ServiceAdministratifsComponent } from './service-administratifs.component';
import { OverviewComponent } from './components/overview/overview.component';
import { CreateServiceAdministratifsComponent } from './components/create-service-administratifs/create-service-administratifs.component';
import { EditServiceAdministratifsComponent } from './components/edit-service-administratifs/edit-service-administratifs.component';

const routes: Routes = [
  {
    path: '',
    component: ServiceAdministratifsComponent,

    children: [
      {
        path: '',
        component: OverviewComponent,
      },
      {
        path: 'create',
        component: CreateServiceAdministratifsComponent,
      },
      {
        path: ':id',
        component: EditServiceAdministratifsComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServiceAdministratifsRoutingModule {}
