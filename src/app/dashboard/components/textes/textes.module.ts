import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextesRoutingModule } from './textes-routing.module';
import { TextFormComponent } from './component/text-form/text-form.component';
import { OverviewComponent } from './component/overview/overview.component';
import { EditTextComponent } from './component/edit-text/edit-text.component';
import { CreateTextComponent } from './component/create-text/create-text.component';
import { TextesComponent } from './textes.component';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';

@NgModule({
  declarations: [
    TextesComponent,
    OverviewComponent,
    TextFormComponent,
    EditTextComponent,
    CreateTextComponent,
  ],
  imports: [CommonModule, TextesRoutingModule, MaterialModule],
})
export class TextesModule {}
