import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
//import { SharedModule } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { SharedUiModule } from '../shared/shared.module';

@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [CommonModule, SharedUiModule],
  exports: [HeaderComponent, FooterComponent],
})
export class CoreModule {}
