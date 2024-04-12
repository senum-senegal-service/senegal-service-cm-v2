import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { OverviewComponent } from './components/overview/overview.component';
import { MaterialModule } from '../shared/modules/material/material.module';
import { HeaderModule } from '../shared/components/header/header.module';
import { BottomPageDashboardComponent } from '../shared/components/bottom-page-dashboard/bottom-page-dashboard.component';

@NgModule({
  declarations: [DashboardComponent, OverviewComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule,
    HeaderModule,
    BottomPageDashboardComponent,
  ],
})
export class DashboardModule {}
