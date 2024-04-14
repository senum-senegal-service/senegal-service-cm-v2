import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HubsRoutingModule } from './hubs-routing.module';
import { HubsComponent } from './hubs.component';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';
import { OverviewComponent } from './components/overview/overview.component';
import { CreateHubComponent } from './components/create-hub/create-hub.component';
import { EditHubComponent } from './components/edit-hub/edit-hub.component';
import { HubFormComponent } from './components/hub-form/hub-form.component';

@NgModule({
  declarations: [
    HubsComponent,
    OverviewComponent,
    CreateHubComponent,
    EditHubComponent,
    HubFormComponent,
  ],
  imports: [CommonModule, HubsRoutingModule, MaterialModule],
})
export class HubsModule {}
