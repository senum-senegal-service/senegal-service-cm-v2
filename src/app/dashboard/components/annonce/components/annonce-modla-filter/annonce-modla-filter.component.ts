import { Component, Inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-annonce-modla-filter',
  templateUrl: './annonce-modla-filter.component.html',
  styleUrls: ['./annonce-modla-filter.component.scss'],
})
export class AnnonceModlaFilterComponent {
  selectedValue: string;
  states: any[] = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' },
  ];

  dataFilter!: any;
  formFilter!: any;

  constructor(
    public dialogRef: MatDialogRef<AnnonceModlaFilterComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder
  ) {
    console.log(data);
    this.dataFilter = data;
  }

  ngOnInit(): void {
    this.formFilter = this.fb.group({
      byEtat: '',
      byStatutPublication: '',
      byStatutUne: '',
      byProcedure: '',
      byDateModification: '',
      byPrice: '',
    });
  }

  onSubmit(): void {
    this.dialogRef.close(this.dataFilter);
  }

  onClose() {
    this.dialogRef.close();
  }
}
