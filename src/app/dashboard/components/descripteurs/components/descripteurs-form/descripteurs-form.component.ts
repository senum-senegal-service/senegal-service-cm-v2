import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-descripteurs-form',
  templateUrl: './descripteurs-form.component.html',
  styleUrl: './descripteurs-form.component.scss',
})
export class DescripteursFormComponent {
  @Input() formTitle: string;
}
