import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { EdvsComponent } from './edv.component';
import { OverviewComponent } from './components/overview/overview.component';
import { CreateEdvComponent } from './components/create-edv/create-edv.component';
import { EditEdvComponent } from './components/edit-edv/edit-edv.component';

const routes: Routes = [
  {
    path: '',
    component: EdvsComponent,

    children: [
      {
        path: '',
        component: OverviewComponent,
      },
      {
        path: 'create',
        component: CreateEdvComponent,
      },
      {
        path: ':id',
        component: EditEdvComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EdvsRoutingModule {}
