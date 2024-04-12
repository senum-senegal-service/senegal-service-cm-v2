import { AngularEditorConfig } from '@kolkov/angular-editor';

export const EditorConfig: AngularEditorConfig = {
  editable: true,
  spellcheck: true,
  height: 'auto',
  minHeight: '140px',
  maxHeight: 'auto',
  width: 'auto',
  minWidth: '100%',
  translate: 'yes',
  enableToolbar: true,
  showToolbar: true,
  placeholder: 'Ajoutez le contenu de la demarche',
  defaultParagraphSeparator: '',
  defaultFontName: '',
  defaultFontSize: '',
  fonts: [
    { class: 'Manrope', name: 'Manrope' },
    { class: 'Roboto', name: 'Roboto' },
    { class: 'Helvetica Neue', name: 'Helvetica Neue' },
    { class: 'sans-serif', name: 'sans-serif' },
    { class: 'lato', name: 'Lato' },
    { class: 'montserrat', name: 'Montserrat' },
    { class: 'ubuntu', name: 'Ubuntu' },
    { class: 'nunito', name: 'Nunito' },
    { class: 'poppins', name: 'Poppins' },
  ],
  customClasses: [
    {
      name: 'quote',
      class: 'quote',
    },
    {
      name: 'redText',
      class: 'redText',
    },
    {
      name: 'titleText',
      class: 'titleText',
      tag: 'h1',
    },
  ],
  uploadUrl: 'v1/image',
  // upload: (file: File) => { ... }
  uploadWithCredentials: false,
  sanitize: true,
  toolbarPosition: 'top',
  toolbarHiddenButtons: [['bold', 'italic'], ['fontSize']],
};
