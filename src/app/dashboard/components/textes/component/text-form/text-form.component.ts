import { Component, Input } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { EditorConfig } from 'src/app/shared/utils/angular-editor-configuration';
import { SelectOptions } from 'src/app/shared/utils/selec-options';

@Component({
  selector: 'app-text-form',
  templateUrl: './text-form.component.html',
  styleUrls: ['./text-form.component.scss'],
})
export class TextFormComponent {
  @Input() formTitle: string;
  content: string = '';
  editorConfig: AngularEditorConfig = EditorConfig;

  selectedValue: string;

  toggleBtnAction: boolean = false;

  states: any[] = SelectOptions.states;

  handleFileInput(event: any) {
    const fileNameElement = document.getElementById('fileName');
    const fileName: string = event.target.files[0].name;
    fileNameElement.textContent =
      fileName.length > 18 ? fileName.substring(0, 18) + '...' : fileName;
  }
}
