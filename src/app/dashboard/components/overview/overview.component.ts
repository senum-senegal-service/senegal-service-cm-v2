import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
})
export class OverviewComponent implements OnInit {
  cardList = [
    {
      icon: 'fa-solid fa-list-check',
      label: 'Démarches',
      nbr: 234,
    },
    {
      icon: 'fa-regular fa-newspaper',
      label: 'Actualitées',
      nbr: 46,
    },
    {
      icon: 'fa-brands fa-optin-monster',
      label: 'name',
      nbr: 10,
    },
    {
      icon: 'fa-brands fa-optin-monster',
      label: 'name',
      nbr: 10,
    },
    {
      icon: 'fa-brands fa-optin-monster',
      label: 'name',
      nbr: 10,
    },
    {
      icon: 'fa-brands fa-optin-monster',
      label: 'name',
      nbr: 10,
    },
  ];
  ngOnInit(): void {}
}
