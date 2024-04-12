import { Component } from '@angular/core';
import { MaterialModule } from '../../modules/material/material.module';

@Component({
  selector: 'app-bottom-page-dashboard',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './bottom-page-dashboard.component.html',
  styleUrl: './bottom-page-dashboard.component.scss',
})
export class BottomPageDashboardComponent {}
