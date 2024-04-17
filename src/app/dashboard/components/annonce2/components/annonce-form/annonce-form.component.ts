import { Component, Input } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { EditorConfig } from 'src/app/shared/utils/angular-editor-configuration';
import { SelectOptions } from 'src/app/shared/utils/selec-options';

@Component({
  selector: 'app-annonce-form',

  templateUrl: './annonce-form.component.html',
  styleUrls: ['./annonce-form.component.scss'],
})
export class AnnonceFormComponent {
  @Input() formTitle: string;
  content: string = '';
  editorConfig: AngularEditorConfig = EditorConfig;

  selectedValue: string;
  toggleBtnAction: boolean = false;

  states: any[] = SelectOptions.states;

  mediaPreview: string | ArrayBuffer | null;
  mediaType: 'image' | 'video' | null;

  previewMedia(event: any): void {
    const input = event.target;
    const file = input.files[0];
    const maxFileSize = 20 * 1024 * 1024; // Taille maximale autorisée en octets (20 Mo)

    if (file && file.size < maxFileSize) {
      const reader = new FileReader();

      reader.onload = () => {
        this.mediaPreview = reader.result;

        // Vérifier le type du fichier
        if (file.type.startsWith('image')) {
          this.mediaType = 'image';
        } else if (file.type.startsWith('video')) {
          this.mediaType = 'video';
        } else {
          // Gérer d'autres types de fichiers si nécessaire
          console.log('Type de fichier non pris en charge');
        }
      };

      reader.readAsDataURL(file);
    }
  }
}
