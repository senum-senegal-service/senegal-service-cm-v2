import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { ModalConfirmationComponent } from 'src/app/shared/components/modal-confirmation/modal-confirmation.component';
import { SnackBarService } from 'src/app/shared/services/snackbar.service';
import {
  Annonce,
  FetchAnnonceGQL,
  PublishAnnonceGQL,
  UnPublishAnnonceGQL,
} from 'src/graphql/generated';

@Component({
  selector: 'app-view-annonce',
  templateUrl: './view-annonce.component.html',
  styleUrl: './view-annonce.component.scss',
})
export class ViewAnnonceComponent {
  annonceId: string;
  annonce: Annonce;
  constructor(
    public dialog: MatDialog,
    private route: ActivatedRoute,
    private fetchAnnonceGQL: FetchAnnonceGQL,
    private publishActuality: PublishAnnonceGQL,
    private unPublishActuality: UnPublishAnnonceGQL,
    private snackBarService: SnackBarService
  ) {
    this.route.paramMap.subscribe((params) => {
      this.annonceId = params.get('id');
      if (this.annonceId) {
        this.fetchAnnonce();
      }
    });
  }

  fetchAnnonce() {
    if (!this.annonceId) {
      return;
    }
    this.fetchAnnonceGQL
      .fetch({ annonceId: this.annonceId }, { fetchPolicy: 'no-cache' })
      .subscribe((result) => {
        this.annonce = result.data.fetchAnnonce as any;
        // console.log(this.annonce.service_administratifs);
      });
  }

  handleChangeState() {
    this.openDialog('changeState', this.annonceId);
  }

  handleUnPublish() {
    this.openDialog('unpublish', this.annonceId);
  }

  handlePublish() {
    this.openDialog('publish', this.annonceId);
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
            this.publishActuality.mutate({ annonceId: id }).subscribe(
              (result) => {
                if (result.data.publishAnnonce) {
                  this.fetchAnnonce();
                }
              },
              (error) => {
                this.snackBarService.showErrorSnackBar();
              }
            );
            break;
          case 'unpublish':
            this.unPublishActuality.mutate({ annonceId: id }).subscribe(
              (result) => {
                if (result.data.unPublishAnnonce) {
                  this.fetchAnnonce();
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
