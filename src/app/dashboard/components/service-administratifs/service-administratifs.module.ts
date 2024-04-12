import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceAdministratifsRoutingModule } from './service-administratifs-routing.module';
import { ServiceAdministratifsComponent } from './service-administratifs.component';
import { OverviewComponent } from './components/overview/overview.component';
import { CreateServiceAdministratifsComponent } from './components/create-service-administratifs/create-service-administratifs.component';
import { EditServiceAdministratifsComponent } from './components/edit-service-administratifs/edit-service-administratifs.component';
import { ServiceAdministratifFormComponent } from './components/service-administratif-form/service-administratif-form.component';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';

@NgModule({
  declarations: [
    ServiceAdministratifsComponent,
    OverviewComponent,
    CreateServiceAdministratifsComponent,
    EditServiceAdministratifsComponent,
    ServiceAdministratifFormComponent,
  ],
  imports: [CommonModule, ServiceAdministratifsRoutingModule, MaterialModule],
})
export class ServiceAdministratifsModule {}
