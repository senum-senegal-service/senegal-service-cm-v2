import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { ModalConfirmationComponent } from 'src/app/shared/components/modal-confirmation/modal-confirmation.component';
import { SnackBarService } from 'src/app/shared/services/snackbar.service';
import {
  FetchServiceGQL,
  PublishServiceGQL,
  Service,
  UnPublishServiceGQL,
} from 'src/graphql/generated';

@Component({
  selector: 'app-view-service',
  templateUrl: './view-service.component.html',
  styleUrl: './view-service.component.scss',
})
export class ViewServiceComponent {
  serviceId: string;
  service: Service;
  serviceAdministratif: any;

  constructor(
    public dialog: MatDialog,
    private fetchServiceGQL: FetchServiceGQL,
    private publishService: PublishServiceGQL,
    private unPublishService: UnPublishServiceGQL,
    private snackbar: SnackBarService,
    private route: ActivatedRoute
  ) {
    this.route.paramMap.subscribe((params) => {
      this.serviceId = params.get('id');
      if (this.serviceId) {
        this.fetchService();
      }
    });
  }

  fetchService() {
    if (!this.serviceId) {
      return;
    }
    this.fetchServiceGQL
      .fetch({ serviceId: this.serviceId }, { fetchPolicy: 'no-cache' })
      .subscribe((result) => {
        this.service = result.data.fetchService as any;
        this.serviceAdministratif = this.service.service_administratifs[0];
        // console.log(this.service.sous_themes);
      });
  }

  handleChangeState() {
    this.openDialog('changeState', this.serviceId);
  }

  handleUnPublish() {
    this.openDialog('unpublish', this.serviceId);
  }

  handlePublish() {
    this.openDialog('publish', this.serviceId);
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
            this.publishService.mutate({ serviceId: id }).subscribe(
              (result) => {
                if (result.data.publishService) {
                  this.fetchService();
                }
              },
              (error) => {
                this.snackbar.showErrorSnackBar();
              }
            );
            break;
          case 'unpublish':
            this.unPublishService.mutate({ serviceId: id }).subscribe(
              (result) => {
                if (result.data.unPublishService) {
                  this.fetchService();
                }
              },
              (error) => {
                this.snackbar.showErrorSnackBar();
              }
            );
            break;
        }
      }
    });
  }
}
