import { Component, Input } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { EditorConfig } from 'src/app/shared/utils/angular-editor-configuration';
import { SelectOptions } from 'src/app/shared/utils/selec-options';

@Component({
  selector: 'app-form-faq',
  templateUrl: './form-faq.component.html',
  styleUrls: ['./form-faq.component.scss'],
})
export class FormFaqComponent {
  @Input() formTitle: string;
  content: string = '';
  editorConfig: AngularEditorConfig = EditorConfig;

  selectedValue: string;

  toggleBtnAction: boolean = false;

  states: any[] = SelectOptions.states;
}
