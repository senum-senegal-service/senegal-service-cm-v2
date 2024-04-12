import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TextesComponent } from './textes.component';
import { OverviewComponent } from './component/overview/overview.component';
import { CreateTextComponent } from './component/create-text/create-text.component';
import { EditTextComponent } from './component/edit-text/edit-text.component';

const routes: Routes = [
  {
    path: '',
    component: TextesComponent,

    children: [
      {
        path: '',
        component: OverviewComponent,
      },
      {
        path: 'create',
        component: CreateTextComponent,
      },
      {
        path: ':id',
        component: EditTextComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TextesRoutingModule {}
