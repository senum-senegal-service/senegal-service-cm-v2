import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-actualite',
  templateUrl: './edit-actualite.component.html',
  styleUrls: ['./edit-actualite.component.scss'],
})
export class EditActualiteComponent {
  actualiteId!: string;
  constructor(private route: ActivatedRoute) {
    this.route.paramMap.subscribe((params) => {
      this.actualiteId = params.get('id');
    });
  }
}
