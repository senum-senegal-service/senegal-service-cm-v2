import { Component, Input } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { EditorConfig } from 'src/app/shared/utils/angular-editor-configuration';
import { SelectOptions } from 'src/app/shared/utils/selec-options';

@Component({
  selector: 'app-formulaire-form',
  templateUrl: './formulaire-form.component.html',
  styleUrls: ['./formulaire-form.component.scss'],
})
export class FormulaireFormComponent {
  @Input() formTitle: string;
  content: string = '';
  editorConfig: AngularEditorConfig = EditorConfig;

  selectedValue: string;

  toggleBtnAction: boolean = false;

  states: any[] = SelectOptions.states;
}
