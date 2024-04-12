import { Component, Input } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { EditorConfig } from 'src/app/shared/utils/angular-editor-configuration';
import { SelectOptions } from 'src/app/shared/utils/selec-options';

@Component({
  selector: 'app-modele-lettres-form',
  templateUrl: './modele-lettres-form.component.html',
  styleUrl: './modele-lettres-form.component.scss',
})
export class ModeleLettresFormComponent {
  @Input() formTitle: string;
  content: string = '';
  editorConfig: AngularEditorConfig = EditorConfig;

  selectedValue: string;

  toggleBtnAction: boolean = false;

  states: any[] = SelectOptions.states;
}
