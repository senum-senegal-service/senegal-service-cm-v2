import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollectivitesRoutingModule } from './collectivites-routing.module';
import { CollectivitesComponent } from './collectivites.component';
import { OverviewComponent } from './components/overview/overview.component';
import { CollectivitesFormComponent } from './components/collectivites-form/collectivites-form.component';
import { CreateCollectiviteComponent } from './components/create-collectivite/create-collectivite.component';
import { EditCollectiviteComponent } from './components/edit-collectivite/edit-collectivite.component';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';

@NgModule({
  declarations: [
    CollectivitesComponent,
    OverviewComponent,
    CollectivitesFormComponent,
    CreateCollectiviteComponent,
    EditCollectiviteComponent,
  ],
  imports: [CommonModule, CollectivitesRoutingModule, MaterialModule],
})
export class CollectivitesModule {}
