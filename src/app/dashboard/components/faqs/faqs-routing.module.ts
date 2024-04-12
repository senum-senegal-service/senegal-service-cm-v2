import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { OverviewComponent } from './components/overview/overview.component';
import { CreateFaqComponent } from './components/create-faq/create-faq.component';
import { EditFaqComponent } from './components/edit-faq/edit-faq.component';
import { FaqsComponent } from './faqs.component';

const routes: Routes = [
  {
    path: '',
    component: FaqsComponent,

    children: [
      {
        path: '',
        component: OverviewComponent,
      },
      {
        path: 'create',
        component: CreateFaqComponent,
      },
      {
        path: ':id',
        component: EditFaqComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FaqsRoutingModule {}
