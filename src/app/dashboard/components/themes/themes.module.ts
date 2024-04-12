import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemesComponent } from './themes.component';
import { ThemesRoutingModule } from './themes-routing.module';
import { OverviewComponent } from './components/overview/overview.component';
import { ThemeFormComponent } from './components/theme-form/theme-form.component';
import { CreateThemeComponent } from './components/create-theme/create-theme.component';
import { EditThemeComponent } from './components/edit-theme/edit-theme.component';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';

@NgModule({
  declarations: [
    ThemesComponent,
    OverviewComponent,
    ThemeFormComponent,
    CreateThemeComponent,
    EditThemeComponent,
  ],
  imports: [CommonModule, ThemesRoutingModule, MaterialModule],
})
export class ThemesModule {}
