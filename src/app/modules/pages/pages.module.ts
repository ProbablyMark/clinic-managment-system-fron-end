import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing/landing.component';

import { SharedUiModule } from '../shared/shared.module';
import { PopUpsModule } from '../pop-ups/pop-ups.module';
@NgModule({
  declarations: [LandingComponent],
  imports: [CommonModule, SharedUiModule, PopUpsModule],
  exports: [LandingComponent],
})
export class PagesModule {}
