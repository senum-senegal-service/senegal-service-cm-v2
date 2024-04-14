import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-hub',
  templateUrl: './edit-hub.component.html',
  styleUrls: ['./edit-hub.component.scss'],
})
export class EditHubComponent {
  hubId!: string;
  constructor(private route: ActivatedRoute) {
    this.route.paramMap.subscribe((params) => {
      this.hubId = params.get('id');
    });
  }
}
