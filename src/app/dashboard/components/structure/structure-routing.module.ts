import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { StructuresComponent } from './structure.component';
import { OverviewComponent } from './components/overview/overview.component';
import { CreateStructureComponent } from './components/create-structure/create-structure.component';
import { EditStructureComponent } from './components/edit-structure/edit-structure.component';
import { ViewStructureComponent } from './components/view-structure/view-structure.component';

const routes: Routes = [
  {
    path: '',
    component: StructuresComponent,

    children: [
      {
        path: '',
        component: OverviewComponent,
      },
      {
        path: 'create',
        component: CreateStructureComponent,
      },
      {
        path: ':id',
        component: EditStructureComponent,
      },
      {
        path: 'detail/:id',
        component: ViewStructureComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StructuresRoutingModule {}
