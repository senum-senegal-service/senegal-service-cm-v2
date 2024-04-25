import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HubsComponent } from './hub.component';
import { OverviewComponent } from './components/overview/overview.component';
import { CreateHubComponent } from './components/create-hub/create-hub.component';
import { EditHubComponent } from './components/edit-hub/edit-hub.component';
import { ViewHubComponent } from './components/view-hub/view-hub.component';

const routes: Routes = [
  {
    path: '',
    component: HubsComponent,

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
      {
        path: 'detail/:id',
        component: ViewHubComponent,
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
