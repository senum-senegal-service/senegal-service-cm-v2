import { Component, Input } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { EditorConfig } from 'src/app/shared/utils/angular-editor-configuration';
import { SelectOptions } from 'src/app/shared/utils/selec-options';

@Component({
  selector: 'app-actualite-form',
  templateUrl: './actualite-form.component.html',
  styleUrls: ['./actualite-form.component.scss'],
})
export class ActualiteFormComponent {
  @Input() formTitle: string;
  content: string = '';
  editorConfig: AngularEditorConfig = EditorConfig;

  selectedValue: string;

  toggleBtnAction: boolean = false;

  states: any[] = SelectOptions.states;

  //POUR LES MENU DROPDOWN DES INPUTS
  options: string[] = [
    'Apple',
    'Banana',
    'Orange',
    ' Strawberry Strawberry Strawberry Strawberry Strawberry Strawberry',
    'Grape',
    'Pineapple',
    'Watermelon',
    'Cherry',
    'Mango',
    'Peach',
    'Pear',
    'Kiwi',
    'Blueberry',
    'Raspberry',
    'Lemon',
    'Lime',
    'Coconut',
    'Papaya',
    'Cantaloupe',
    'Apricot',
  ];
  filteredOptions: string[] = this.options;
  searchTerm: string = '';
  selectedOptions: string[] = [];

  // Méthode pour filtrer les options en fonction du terme de recherche
  filterOptions(): void {
    const searchTerm = this.searchTerm.toLowerCase();
    this.filteredOptions = this.options.filter((option) =>
      option.toLowerCase().includes(searchTerm)
    );
  }

  //Méthode pour ajouter une option
  selectOption(option: string) {
    this.searchTerm = '';
    this.filteredOptions = this.options;

    const index = this.selectedOptions.indexOf(option);
    if (index !== -1) {
      this.selectedOptions.splice(index, 1);
    } else {
      this.selectedOptions.push(option);
    }
  }

  isAllreadySelected(opt: string) {
    const index = this.selectedOptions.indexOf(opt);
    if (index !== -1) {
      return true;
    } else {
      return false;
    }
  }

  removeOption(str: string) {
    this.selectedOptions = this.selectedOptions.filter((item) => item !== str);
  }
  //////////////////////////////////////////////////////////////////////////////
}
