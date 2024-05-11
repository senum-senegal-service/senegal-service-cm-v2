import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ActualitesComponent } from './actualites.component';
import { OverviewComponent } from './components/overview/overview.component';
import { CreateActualiteComponent } from './components/create-actualite/create-actualite.component';
import { EditActualiteComponent } from './components/edit-actualite/edit-actualite.component';
import { ViewActualityComponent } from './components/view-actuality/view-actuality.component';

const routes: Routes = [
  {
    path: '',
    component: ActualitesComponent,

    children: [
      {
        path: '',
        component: OverviewComponent,
      },
      {
        path: 'create',
        component: CreateActualiteComponent,
      },
      {
        path: ':id',
        component: EditActualiteComponent,
      },
      {
        path: 'detail/:id',
        component: ViewActualityComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActualitesRoutingModule {}
