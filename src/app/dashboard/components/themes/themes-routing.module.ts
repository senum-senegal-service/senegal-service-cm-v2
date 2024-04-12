import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ThemesComponent } from './themes.component';
import { OverviewComponent } from './components/overview/overview.component';
import { CreateThemeComponent } from './components/create-theme/create-theme.component';
import { EditThemeComponent } from './components/edit-theme/edit-theme.component';

const routes: Routes = [
  {
    path: '',
    component: ThemesComponent,

    children: [
      {
        path: '',
        component: OverviewComponent,
      },
      {
        path: 'create',
        component: CreateThemeComponent,
      },
      {
        path: ':id',
        component: EditThemeComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ThemesRoutingModule {}
