import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-multi-select',
  templateUrl: './multi-select.component.html',
  styleUrls: ['./multi-select.component.scss']
})
export class MultiSelectComponent implements OnInit, OnChanges {
  @Input() useApi: boolean = false;
  @Input() apiService = null;
  @Input() options: any[];
  @Input() name: string;
  @Input() form: FormGroup;
  @Input() value: any[] = [];
  filteredOptions: any[];
  searchTerm: string = '';
  selectedOptions: any[] = [];
  uniqueId: string;


  constructor() { }

  ngOnInit() {
    this.uniqueId = `_${uuidv4()}`;
    this.filteredOptions = this.options;
    if(this.useApi) {
      this.getData();
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.filteredOptions = this.options;
    this.fillForm();
  }


    filterOptions(): void {
      if(this.useApi) {

      } else {
        const searchTerm = this.searchTerm.toLowerCase();
        this.filteredOptions = this.options.filter((option) =>
          option.nom.toLowerCase().includes(searchTerm)
        );
      }

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
      this.updateForm()
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
      this.selectedOptions = this.selectedOptions.filter((item) => item.id != str);
      this.updateForm()
    }

    getData() {
      this.apiService.fetch({ queryFilter: { search: this.searchTerm } }).subscribe(
        result => {
          this.options = result.data.searchResults;
        }
      )
    }

    updateForm() {
      if(this.form) {
        this.form.controls[this.name].setValue(this.selectedOptions.map(o => o.id));
      }
    }

    fillForm() {
      if(this.form && this.options?.length) {
        this.selectedOptions = (this.value || []).map(so => {
          return this.options.find(o => o.id == so.id);
        });

        // console.log({value: this.value, selectedOptions: this.selectedOptions, options: this.options})
        this.updateForm();
      }
    }
}
