import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaqsRoutingModule } from './faqs-routing.module';
import { FaqsComponent } from './faqs.component';
import { OverviewComponent } from './components/overview/overview.component';
import { CreateFaqComponent } from './components/create-faq/create-faq.component';
import { EditFaqComponent } from './components/edit-faq/edit-faq.component';
import { FormFaqComponent } from './components/form-faq/form-faq.component';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';

@NgModule({
  declarations: [
    FaqsComponent,
    OverviewComponent,
    CreateFaqComponent,
    EditFaqComponent,
    FormFaqComponent,
  ],
  imports: [CommonModule, FaqsRoutingModule, MaterialModule],
})
export class FaqsModule {}
