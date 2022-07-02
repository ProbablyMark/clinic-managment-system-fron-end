import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultAlertComponent } from './default-alert/default-alert.component';
import { DefaultConfirmComponent } from './default-confirm/default-confirm.component';
import { LoginSignupComponent } from './login-signup/login-signup.component';



@NgModule({
  declarations: [
    DefaultAlertComponent,
    DefaultConfirmComponent,
    LoginSignupComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PopUpsModule { }
