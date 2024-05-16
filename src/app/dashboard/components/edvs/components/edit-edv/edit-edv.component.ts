import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-edv',
  templateUrl: './edit-edv.component.html',
  styleUrls: ['./edit-edv.component.scss'],
})
export class EditEdvComponent {
  edvId!: string;
  constructor(private route: ActivatedRoute) {
    this.route.paramMap.subscribe((params) => {
      this.edvId = params.get('id');
    });
  }
}
