import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { ModalConfirmationComponent } from 'src/app/shared/components/modal-confirmation/modal-confirmation.component';
import { SnackBarService } from 'src/app/shared/services/snackbar.service';
import {
  FetchHubGQL,
  Hub,
  PublishHubGQL,
  UnPublishHubGQL,
} from 'src/graphql/generated';

@Component({
  selector: 'app-view-hub',
  templateUrl: './view-hub.component.html',
  styleUrl: './view-hub.component.scss',
})
export class ViewHubComponent {
  hub!: Hub;
  hubId!: string;

  constructor(
    private route: ActivatedRoute,
    private fetchHubGQL: FetchHubGQL,
    public dialog: MatDialog,
    private publishHubGQL: PublishHubGQL,
    private unPublishHubGQL: UnPublishHubGQL,
    private snackBarService: SnackBarService
  ) {
    this.route.paramMap.subscribe((params) => {
      this.hubId = params.get('id');
      if (this.hubId) {
        this.fetchHub();
      }
    });
  }

  fetchHub() {
    if (!this.hubId) {
      return;
    }
    this.fetchHubGQL
      .fetch({ hubId: this.hubId }, { fetchPolicy: 'no-cache' })
      .subscribe((result) => {
        this.hub = result.data.fetchHub as any;
        // console.log(this.hub.sous_themes[0].nom);
      });
  }

  handleChangeState() {
    this.openDialog('changeState', this.hubId);
  }

  handleUnPublish() {
    this.openDialog('unpublish', this.hubId);
  }

  handlePublish() {
    this.openDialog('publish', this.hubId);
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
            this.publishHubGQL.mutate({ hubId: id }).subscribe(
              (result) => {
                if (result.data.publishHub) {
                  this.fetchHub();
                }
              },
              (error) => {
                this.snackBarService.showErrorSnackBar();
              }
            );
            break;
          case 'unpublish':
            this.unPublishHubGQL.mutate({ hubId: id }).subscribe(
              (result) => {
                if (result.data.unPublishHub) {
                  this.fetchHub();
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
