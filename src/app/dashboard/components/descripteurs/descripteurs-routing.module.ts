import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DescripteursComponent } from './descripteurs.component';
import { OverviewComponent } from './components/overview/overview.component';
import { CreateDescripteursComponent } from './components/create-descripteurs/create-descripteurs.component';
import { EditDescripteursComponent } from './components/edit-descripteurs/edit-descripteurs.component';

const routes: Routes = [
  {
    path: '',
    component: DescripteursComponent,

    children: [
      {
        path: '',
        component: OverviewComponent,
      },
      {
        path: 'create',
        component: CreateDescripteursComponent,
      },
      {
        path: ':id',
        component: EditDescripteursComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DescripteursRoutingModule {}
