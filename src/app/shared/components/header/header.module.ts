import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { ApplyContextClassModule } from '../../directives/apply-context-class/apply-context-class.module';
import { DropdownModule } from '../../directives/dropdown/dropdown.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatIconModule,
    RouterModule,
    ApplyContextClassModule,
    DropdownModule,
    // TranslateModule,
  ],
  exports: [HeaderComponent],
})
export class HeaderModule {}
