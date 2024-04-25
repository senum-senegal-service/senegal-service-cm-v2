import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesComponent } from './service.component';
import { ServicesRoutingModule } from './service-routing.module';
import { OverviewComponent } from './components/overview/overview.component';
import { CreateServiceComponent } from './components/create-service/create-service.component';
import { ServiceFormComponent } from './components/service-form/service-form.component';
import { EditServiceComponent } from './components/edit-service/edit-service.component';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';
import { DropdownModule } from 'src/app/shared/directives/dropdown/dropdown.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MultiSelectModule } from 'src/app/shared/components/multi-select/multi-select.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ViewServiceComponent } from './components/view-service/view-service.component';

@NgModule({
  declarations: [
    ServicesComponent,
    OverviewComponent,
    CreateServiceComponent,
    ServiceFormComponent,
    EditServiceComponent,
    ViewServiceComponent,
  ],
  imports: [
    CommonModule,
    ServicesRoutingModule,
    MaterialModule,
    DropdownModule,
    ReactiveFormsModule,
    FormsModule,
    MultiSelectModule,
    FlexLayoutModule,
  ],
})
export class ServicesModule {}
