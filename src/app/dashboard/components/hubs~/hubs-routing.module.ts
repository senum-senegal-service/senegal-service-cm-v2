import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AnnonceComponent } from '../annonce/annonce.component';
import { OverviewComponent } from './components/overview/overview.component';
import { CreateHubComponent } from './components/create-hub/create-hub.component';
import { EditHubComponent } from './components/edit-hub/edit-hub.component';

const routes: Routes = [
  {
    path: '',
    component: AnnonceComponent,

    children: [
      {
        path: '',
        component: OverviewComponent,
      },
      {
        path: 'create',
        component: CreateHubComponent,
      },
      {
        path: ':id',
        component: EditHubComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HubsRoutingModule {}
