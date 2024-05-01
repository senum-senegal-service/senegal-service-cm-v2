import { AfterViewInit, Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { ModalConfirmationComponent } from 'src/app/shared/components/modal-confirmation/modal-confirmation.component';
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
    private fetchDemarcheGql: FetchDemarcheGQL,
    public dialog: MatDialog
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

  handleChangeState() {
    const data = {
      message: `Changer l'état de validation !`,
      btnMessage: 'Confirmer',
      btnStyle: 'btn-success',
    };
    this.openDialogDelete(this.demarcheId, data);
  }

  handleUnPublish() {
    const data = {
      message: `Confirmer la dépublicaion de la démarche !`,
      btnMessage: 'Confirmer',
    };
    this.openDialogDelete(this.demarcheId, data);
  }

  handlePublish() {
    const data = {
      message: `Confirmer la publication de la démarche !`,
      btnMessage: 'Confirmer',
      btnStyle: 'btn-success',
    };
    this.openDialogDelete(this.demarcheId, data);
  }

  openDialogDelete(id: string, data: any): void {
    const dialogRef = this.dialog.open(ModalConfirmationComponent, {
      data: data,
      maxHeight: '90vh',
      maxWidth: '600px',
      width: '100%',
    });

    dialogRef.afterClosed().subscribe((resp) => {
      if (resp) {
        // this.deleteHubGQL.mutate({ demarcheId: id }).subscribe(
        //   (result) => {
        //     if (result.data.deleteHub) {
        //       this.getHubs(false);
        //     }
        //   },
        //   (error) => {
        //     this.snackBarService.showErrorSnackBar();
        //   }
        // );
      }
    });
  }
}
