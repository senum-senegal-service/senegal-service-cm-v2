import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { OverviewComponent } from './components/overview/overview.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'hubs-de-vie',
    pathMatch: 'full',
  },
  {
    path: '',
    component: DashboardComponent,

    children: [
      {
        path: 'overview',
        component: OverviewComponent,
      },
      {
        path: 'demarches',
        loadChildren: () =>
          import('./components/demarches/demarches.module').then(
            (m) => m.DemarchesModule
          ),
      },
      {
        path: 'actualites',
        loadChildren: () =>
          import('./components/actualites/actualites.module').then(
            (m) => m.ActualitesModule
          ),
      },
      {
        path: 'hubs-de-vie',
        loadChildren: () =>
          import('./components/hubs/hub.module').then((m) => m.HubsModule),
      },
      {
        path: 'annonces',
        loadChildren: () =>
          import('./components/annonce/annonce.module').then(
            (m) => m.AnnoncesModule
          ),
      },
      {
        path: 'services',
        loadChildren: () =>
          import('./components/service/service.module').then(
            (m) => m.ServicesModule
          ),
      },
      {
        path: 'structures',
        loadChildren: () =>
          import('./components/structure/structure.module').then(
            (m) => m.StructuresModule
          ),
      },
      {
        path: 'notations',
        loadChildren: () =>
          import('./components/review/review.module').then(
            (m) => m.ReviewsModule
          ),
      },
      {
        path: 'textes',
        loadChildren: () =>
          import('./components/textes/textes.module').then(
            (m) => m.TextesModule
          ),
      },
      {
        path: 'formulaires',
        loadChildren: () =>
          import('./components/formulaires/formulaires.module').then(
            (m) => m.FormulairesModule
          ),
      },
      {
        path: 'themes',
        loadChildren: () =>
          import('./components/themes/themes.module').then(
            (m) => m.ThemesModule
          ),
      },
      {
        path: 'faqs',
        loadChildren: () =>
          import('./components/faqs/faqs.module').then((m) => m.FaqsModule),
      },
      {
        path: 'descripteurs',
        loadChildren: () =>
          import('./components/descripteurs/descripteurs.module').then(
            (m) => m.DescripteursModule
          ),
      },
      {
        path: 'modele-lettres',
        loadChildren: () =>
          import('./components/modele-lettres/modele-lettres.module').then(
            (m) => m.ModeleLettresModule
          ),
      },
      {
        path: 'lien-utiles',
        loadChildren: () =>
          import('./components/lien-utiles/lien-utiles.module').then(
            (m) => m.LienUtilesModule
          ),
      },
      {
        path: 'service-administratifs',
        loadChildren: () =>
          import(
            './components/service-administratifs/service-administratifs.module'
          ).then((m) => m.ServiceAdministratifsModule),
      },
      {
        path: 'collectivites',
        loadChildren: () =>
          import('./components/collectivites/collectivites.module').then(
            (m) => m.CollectivitesModule
          ),
      },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
