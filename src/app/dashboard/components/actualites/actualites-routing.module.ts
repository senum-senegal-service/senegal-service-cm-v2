import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';
import { ActualitesComponent } from './actualites.component';
import { OverviewComponent } from './components/overview/overview.component';
import { CreateActualiteComponent } from './components/create-actualite/create-actualite.component';
import { EditActualiteComponent } from './components/edit-actualite/edit-actualite.component';

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
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActualitesRoutingModule {}
