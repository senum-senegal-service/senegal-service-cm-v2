import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { ModalConfirmationComponent } from 'src/app/shared/components/modal-confirmation/modal-confirmation.component';
import { SnackBarService } from 'src/app/shared/services/snackbar.service';
import {
  Actualite,
  FetchActualiteGQL,
  PublishActualiteGQL,
  UnPublishActualiteGQL,
} from 'src/graphql/generated';

@Component({
  selector: 'app-view-actuality',
  templateUrl: './view-actuality.component.html',
  styleUrl: './view-actuality.component.scss',
})
export class ViewActualityComponent {
  actualityId: string = '';
  actuality: any;

  constructor(
    public dialog: MatDialog,
    private route: ActivatedRoute,
    private fetchActualityGQL: FetchActualiteGQL,
    private publishActuality: PublishActualiteGQL,
    private unPublishActuality: UnPublishActualiteGQL,
    private snackBarService: SnackBarService
  ) {
    this.route.paramMap.subscribe((params) => {
      this.actualityId = params.get('id');
      if (this.actualityId) {
        this.fetchActuality();
      }
    });
  }

  fetchActuality() {
    if (!this.actualityId) {
      return;
    }
    this.fetchActualityGQL
      .fetch({ actualiteId: this.actualityId }, { fetchPolicy: 'no-cache' })
      .subscribe((result) => {
        this.actuality = result.data.fetchActualite as any;
        // console.log(this.actuality.add_by);
        // console.log(this.actuality.id);
      });
  }

  handleChangeState() {
    this.openDialog('changeState', this.actualityId);
  }

  handleUnPublish() {
    this.openDialog('unpublish', this.actualityId);
  }

  handlePublish() {
    this.openDialog('publish', this.actualityId);
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
            this.publishActuality.mutate({ actualiteId: id }).subscribe(
              (result) => {
                if (result.data.publishActualite) {
                  this.fetchActuality();
                }
              },
              (error) => {
                this.snackBarService.showErrorSnackBar();
              }
            );
            break;
          case 'unpublish':
            this.unPublishActuality.mutate({ actualiteId: id }).subscribe(
              (result) => {
                if (result.data.unPublishActualite) {
                  this.fetchActuality();
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
