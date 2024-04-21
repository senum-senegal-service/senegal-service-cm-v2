import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../shared/services/sidebar.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  isSidebarOpened: boolean = true;
  dashboardNav = [
    {
      label: 'Tableau de bord',
      link: 'overview',
      icon: 'dashboard',
    },
    {
      label: 'Gestion des hubs de vie',
      link: 'hubs-de-vie',
      icon: 'device_hub',
    },
    {
      label: 'Gestion des demarches',
      link: 'demarches',
      icon: 'list_alt',
    },
    {
      label: 'Gestion des actualités',
      link: 'actualites',
      icon: 'query_builder',
    },
    {
      label: 'Gestion des annonces',
      link: 'annonces',
      icon: 'announcement',
    },
    {
      label: 'Gestion des services',
      link: 'services',
      icon: 'laptop',
    },
    {
      label: 'Structures ESS',
      link: 'structures',
      icon: 'map',
    },
    {
      label: 'Notation Démarches',
      link: 'notations',
      icon: 'star',
    },
    // {
    //   label: 'Gestion thématique',
    //   link: 'themes',
    //   icon: 'storage',
    // },
    // {
    //   label: 'Gestion des textes',
    //   link: 'textes',
    //   icon: 'description',
    // },
    // {
    //   label: 'Gestion des formulaires',
    //   link: 'formulaires',
    //   icon: 'chrome_reader_mode',
    // },
    // {
    //   label: 'Gestion de la FAQ',
    //   link: 'faqs',
    //   icon: 'help',
    // },
    // {
    //   label: 'Gestion des descripteurs',
    //   link: 'descripteurs',
    //   icon: 'public',
    // },
    // {
    //   label: 'Modéle de lettres',
    //   link: 'modele-lettres',
    //   icon: 'receipt',
    // },
    // {
    //   label: 'Gestion des liens utils',
    //   link: 'lien-utiles',
    //   icon: 'link',
    // },
    // {
    //   label: 'Annuaire des services',
    //   link: 'service-administratifs',
    //   icon: 'location_on',
    // },
    // {
    //   label: 'Découpage territorial',
    //   link: 'collectivites',
    //   icon: 'map',
    // },
    // {
    //   label: 'Paramétrage',
    //   link: 'settings',
    //   icon: 'settings',
    // },
  ];

  constructor(private servceSidebar: SidebarService) {}
  ngOnInit(): void {
    this.servceSidebar.isSidebarOpen().subscribe((resp) => {
      this.isSidebarOpened = resp;
    });
  }
}
