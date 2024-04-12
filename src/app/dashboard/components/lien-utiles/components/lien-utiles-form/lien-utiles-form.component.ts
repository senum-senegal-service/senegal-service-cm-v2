import { Component, Input } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { EditorConfig } from 'src/app/shared/utils/angular-editor-configuration';

@Component({
  selector: 'app-lien-utiles-form',
  templateUrl: './lien-utiles-form.component.html',
  styleUrls: ['./lien-utiles-form.component.scss'],
})
export class LienUtilesFormComponent {
  @Input() formTitle: string;
  content: string = '';
  editorConfig: AngularEditorConfig = EditorConfig;

  toggleBtnAction: boolean = false;
}
