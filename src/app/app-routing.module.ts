import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { LandingComponent } from './modules/pages/landing/landing.component';
import { LoginSignupComponent } from './modules/pop-ups/login-signup/login-signup.component';
import { DefaultCalendarComponent } from './modules/shared/default-calendar/default-calendar.component';

const routes: Routes = [
  { path: 'home', component: LandingComponent, data: { animation: 'isRight' } },
  {
    path: 'doctors',
    component: DefaultCalendarComponent,
    canActivate: [AuthGuard],
  },
  { path: 'cal', component: DefaultCalendarComponent },
  { path: 'auth', component: LoginSignupComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [];
