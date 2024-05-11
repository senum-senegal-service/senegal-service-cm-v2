import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { ModalConfirmationComponent } from 'src/app/shared/components/modal-confirmation/modal-confirmation.component';
import { SnackBarService } from 'src/app/shared/services/snackbar.service';
import {
  FetchStructureGQL,
  PublishStructureGQL,
  Structure,
  UnPublishStructureGQL,
} from 'src/graphql/generated';

@Component({
  selector: 'app-view-structure',
  templateUrl: './view-structure.component.html',
  styleUrl: './view-structure.component.scss',
})
export class ViewStructureComponent {
  structureId: string;
  structure: Structure;

  constructor(
    public dialog: MatDialog,
    private route: ActivatedRoute,
    private fetchActualityGQL: FetchStructureGQL,
    private publishActuality: PublishStructureGQL,
    private unPublishActuality: UnPublishStructureGQL,
    private snackBarService: SnackBarService
  ) {
    this.route.paramMap.subscribe((params) => {
      this.structureId = params.get('id');
      if (this.structureId) {
        this.fetchStructure();
      }
    });
  }

  fetchStructure() {
    if (!this.structureId) {
      return;
    }
    this.fetchActualityGQL
      .fetch({ structureId: this.structureId }, { fetchPolicy: 'no-cache' })
      .subscribe((result) => {
        this.structure = result.data.fetchStructure as any;
        // console.log(this.structure.map);
      });
  }

  handleChangeState() {
    this.openDialog('changeState', this.structureId);
  }

  handleUnPublish() {
    this.openDialog('unpublish', this.structureId);
  }

  handlePublish() {
    this.openDialog('publish', this.structureId);
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
            this.publishActuality.mutate({ structureId: id }).subscribe(
              (result) => {
                if (result.data.publishStructure) {
                  this.fetchStructure();
                }
              },
              (error) => {
                this.snackBarService.showErrorSnackBar();
              }
            );
            break;
          case 'unpublish':
            this.unPublishActuality.mutate({ structureId: id }).subscribe(
              (result) => {
                if (result.data.unPublishStructure) {
                  this.fetchStructure();
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
