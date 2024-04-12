import { Component, Input } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { EditorConfig } from 'src/app/shared/utils/angular-editor-configuration';
import { SelectOptions } from 'src/app/shared/utils/selec-options';

@Component({
  selector: 'app-hub-form',
  templateUrl: './hub-form.component.html',
  styleUrls: ['./hub-form.component.scss'],
})
export class HubFormComponent {
  @Input() formTitle: string;
  content: string = '';
  editorConfig: AngularEditorConfig = EditorConfig;

  selectedValue: string;
  toggleBtnAction: boolean = false;

  states: any[] = SelectOptions.states;

  imagePreview: string | ArrayBuffer | null;

  previewImage(event: any): void {
    const input = event.target;
    const file = input.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = () => {
        this.imagePreview = reader.result;
      };

      reader.readAsDataURL(file);
    }
  }
}
