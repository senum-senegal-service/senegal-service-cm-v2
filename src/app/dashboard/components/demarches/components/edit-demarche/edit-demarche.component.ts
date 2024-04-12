import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-demarche',
  templateUrl: './edit-demarche.component.html',
  styleUrls: ['./edit-demarche.component.scss'],
})
export class EditDemarcheComponent {
  demarcheId!: string;
  constructor(private route: ActivatedRoute) {
    this.route.paramMap.subscribe((params) => {
      this.demarcheId = params.get('id');
    });
  }
}
