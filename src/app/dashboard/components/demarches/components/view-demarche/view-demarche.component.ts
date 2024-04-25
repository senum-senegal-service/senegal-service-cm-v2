import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-view-demarche',
  templateUrl: './view-demarche.component.html',
  styleUrl: './view-demarche.component.scss',
})
export class ViewDemarcheComponent implements AfterViewInit {
  navList = [
    `Informations générales`,
    `Services administratifs`,
    `Textes de référence`,
    `Formulaires`,
    `Modèles de lettre`,
    `Foire aux questions`,
    `Historique`,
  ];

  ngAfterViewInit(): void {
    const navList = document.querySelectorAll('.nav-link');

    let i = 0;
    for (let i = 0; i < navList.length; i++) {
      navList[i].addEventListener('click', () => {
        if (navList[i].classList.contains('active')) {
          return;
        } else {
          const currentActiveLink = document.querySelector('.nav-link.active');
          const currentActiveTab = document.querySelector('.tab.active');

          const activedID = 'tab-' + i;
          const activedTab = document.querySelector(`.tab#${activedID}`);

          currentActiveLink.classList.remove('active');
          currentActiveTab.classList.remove('active');

          navList[i].classList.add('active');
          activedTab.classList.add('active');

          // console.log(currentActiveTab);
          // console.log(activedTab);
        }
      });
    }
  }
}
