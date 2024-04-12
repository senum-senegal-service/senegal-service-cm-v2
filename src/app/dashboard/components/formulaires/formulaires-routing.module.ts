import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { OverviewComponent } from './components/overview/overview.component';
import { CreateFormulaireComponent } from './components/create-formulaire/create-formulaire.component';
import { EditFormulaireComponent } from './components/edit-formulaire/edit-formulaire.component';
import { FormulairesComponent } from './formulaires.component';

const routes: Routes = [
  {
    path: '',
    component: FormulairesComponent,

    children: [
      {
        path: '',
        component: OverviewComponent,
      },
      {
        path: 'create',
        component: CreateFormulaireComponent,
      },
      {
        path: ':id',
        component: EditFormulaireComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormulairesRoutingModule {}
