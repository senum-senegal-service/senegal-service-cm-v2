import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CollectivitesComponent } from './collectivites.component';
import { OverviewComponent } from './components/overview/overview.component';
import { CreateCollectiviteComponent } from './components/create-collectivite/create-collectivite.component';
import { EditCollectiviteComponent } from './components/edit-collectivite/edit-collectivite.component';

const routes: Routes = [
  {
    path: '',
    component: CollectivitesComponent,

    children: [
      {
        path: '',
        component: OverviewComponent,
      },
      {
        path: 'create',
        component: CreateCollectiviteComponent,
      },
      {
        path: ':id',
        component: EditCollectiviteComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CollectivitesRoutingModule {}
