import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-service',
  templateUrl: './edit-service.component.html',
  styleUrls: ['./edit-service.component.scss'],
})
export class EditServiceComponent {
  serviceId!: string;
  constructor(private route: ActivatedRoute) {
    this.route.paramMap.subscribe((params) => {
      this.serviceId = params.get('id');
    });
  }
}
