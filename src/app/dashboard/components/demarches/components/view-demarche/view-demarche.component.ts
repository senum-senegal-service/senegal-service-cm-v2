import { AfterViewInit, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Demarche, FetchDemarcheGQL } from 'src/graphql/generated';

@Component({
  selector: 'app-view-demarche',
  templateUrl: './view-demarche.component.html',
  styleUrl: './view-demarche.component.scss',
})
export class ViewDemarcheComponent implements AfterViewInit {
  demarche!: Demarche;
  demarcheId!: string;
  navList = [
    `Informations générales`,
    `Services administratifs`,
    `Textes de référence`,
    `Formulaires`,
    `Modèles de lettre`,
    `Foire aux questions`,
    `Historique`,
  ];

  constructor(
    private route: ActivatedRoute,
    private fetchDemarcheGql: FetchDemarcheGQL
  ) {
    this.route.paramMap.subscribe((params) => {
      this.demarcheId = params.get('id');
      if (this.demarcheId) {
        this.fetchDemarche();
      }
    });
  }

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

  fetchDemarche() {
    if (!this.demarcheId) {
      return;
    }
    this.fetchDemarcheGql
      .fetch({ demarcheId: this.demarcheId }, { fetchPolicy: 'no-cache' })
      .subscribe((result) => {
        this.demarche = result.data.fetchDemarche as any;
        console.log(this.demarche.updatedAt);
      });
  }
}
