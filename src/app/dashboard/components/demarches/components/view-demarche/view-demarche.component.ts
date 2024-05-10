import { AfterViewInit, Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { ModalConfirmationComponent } from 'src/app/shared/components/modal-confirmation/modal-confirmation.component';
import { SnackBarService } from 'src/app/shared/services/snackbar.service';
import {
  Demarche,
  FetchDemarcheGQL,
  PublishDemarcheGQL,
  UnPublishDemarcheGQL,
} from 'src/graphql/generated';

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
    public dialog: MatDialog,
    private publichDemarche: PublishDemarcheGQL,
    private unPublishDemarche: UnPublishDemarcheGQL,
    private snackBarService: SnackBarService
  ) {
    this.route.paramMap.subscribe((params) => {
      this.demarcheId = params.get('id');
      if (this.demarcheId) {
        this.fetchDemarche();
      }
    });
  }

  fetchDemarche() {
    if (!this.demarcheId) {
      return;
    }
    this.fetchDemarcheGql
      .fetch({ demarcheId: this.demarcheId }, { fetchPolicy: 'no-cache' })
      .subscribe((result) => {
        this.demarche = result.data.fetchDemarche as any;
        // console.table(this.demarche.url);
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

  handleChangeState() {
    this.openDialog('changeState', this.demarcheId);
  }

  handleUnPublish() {
    this.openDialog('unpublish', this.demarcheId);
  }

  handlePublish() {
    this.openDialog('publish', this.demarcheId);
  }

  openDialog(
    action: 'changeState' | 'publish' | 'unpublish',
    id: string
  ): void {
    let message: string;
    let btnMessage: string;
    let btnStyle: string;

    switch (action) {
      case 'changeState':
        message = `Changer l'état de validation !`;
        btnMessage = 'Confirmer';
        btnStyle = 'btn-success';
        break;
      case 'publish':
        message = 'Veuillez confirmer la publication !';
        btnMessage = 'Publier';
        btnStyle = 'btn-success';
        break;
      case 'unpublish':
        message = 'Veuillez confirmer la dépublication !';
        btnMessage = 'Dépublier';
        btnStyle = 'btn-danger';
        break;
      default:
        return; // Si une action non reconnue est passée, ne rien faire
    }

    const dialogRef = this.dialog.open(ModalConfirmationComponent, {
      maxHeight: '90vh',
      maxWidth: '600px',
      width: '100%',
      data: {
        message: message,
        btnMessage: btnMessage,
        btnStyle: btnStyle,
      },
    });

    dialogRef.afterClosed().subscribe((resp) => {
      if (resp) {
        switch (action) {
          case 'changeState':
            // this.deleteHubGQL.mutate({ hubId: id }).subscribe(
            //   (result) => {
            //     if (result.data.deleteHub) {
            //       this.getHubs(false);
            //     }
            //   },
            //   (error) => {
            //     this.snackBarService.showErrorSnackBar();
            //   }
            // );
            break;
          case 'publish':
            this.publichDemarche.mutate({ demarcheId: id }).subscribe(
              (result) => {
                if (result.data.publishDemarche) {
                  this.fetchDemarche();
                }
              },
              (error) => {
                this.snackBarService.showErrorSnackBar();
              }
            );
            break;
          case 'unpublish':
            this.unPublishDemarche.mutate({ demarcheId: id }).subscribe(
              (result) => {
                if (result.data.unPublishDemarche) {
                  this.fetchDemarche();
                }
              },
              (error) => {
                this.snackBarService.showErrorSnackBar();
              }
            );
            break;
        }
      }
    });
  }
}
