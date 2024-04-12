import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormulairesRoutingModule } from './formulaires-routing.module';
import { FormulairesComponent } from './formulaires.component';
import { FormulaireFormComponent } from './components/formulaire-form/formulaire-form.component';
import { OverviewComponent } from './components/overview/overview.component';
import { CreateFormulaireComponent } from './components/create-formulaire/create-formulaire.component';
import { EditFormulaireComponent } from './components/edit-formulaire/edit-formulaire.component';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';

@NgModule({
  declarations: [
    OverviewComponent,
    CreateFormulaireComponent,
    EditFormulaireComponent,
    FormulairesComponent,
    FormulaireFormComponent,
  ],
  imports: [CommonModule, FormulairesRoutingModule, MaterialModule],
})
export class FormulairesModule {}
