import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HubsComponent } from './hub.component';
import { HubsRoutingModule } from './hub-routing.module';
import { OverviewComponent } from './components/overview/overview.component';
import { CreateHubComponent } from './components/create-hub/create-hub.component';
import { HubFormComponent } from './components/hub-form/hub-form.component';
import { EditHubComponent } from './components/edit-hub/edit-hub.component';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';
import { DropdownModule } from 'src/app/shared/directives/dropdown/dropdown.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MultiSelectModule } from 'src/app/shared/components/multi-select/multi-select.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    HubsComponent,
    OverviewComponent,
    CreateHubComponent,
    HubFormComponent,
    EditHubComponent,
  ],
  imports: [
    CommonModule,
    HubsRoutingModule,
    MaterialModule,
    DropdownModule,
    ReactiveFormsModule,
    FormsModule,
    MultiSelectModule,
    FlexLayoutModule,
  ],
})
export class HubsModule {}
