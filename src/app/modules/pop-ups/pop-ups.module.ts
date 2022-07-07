import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultAlertComponent } from './default-alert/default-alert.component';
import { DefaultConfirmComponent } from './default-confirm/default-confirm.component';
import { LoginSignupComponent } from './login-signup/login-signup.component';

import { DialogModule } from 'primeng/dialog';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DefaultAlertComponent,
    DefaultConfirmComponent,
    LoginSignupComponent,
  ],
  imports: [CommonModule, DialogModule, FormsModule],
  exports: [LoginSignupComponent, DialogModule],
})
export class PopUpsModule {}
