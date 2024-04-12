import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ModeleLettresComponent } from './modele-lettres.component';
import { OverviewComponent } from './components/overview/overview.component';
import { CreateModeleLettresComponent } from './components/create-modele-lettres/create-modele-lettres.component';
import { EditModeleLettresComponent } from './components/edit-modele-lettres/edit-modele-lettres.component';

const routes: Routes = [
  {
    path: '',
    component: ModeleLettresComponent,

    children: [
      {
        path: '',
        component: OverviewComponent,
      },
      {
        path: 'create',
        component: CreateModeleLettresComponent,
      },
      {
        path: ':id',
        component: EditModeleLettresComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModeleLettresRoutingModule {}
