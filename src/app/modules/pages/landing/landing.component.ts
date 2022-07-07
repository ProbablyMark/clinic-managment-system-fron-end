import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
  encapsulation: ViewEncapsulation.None, //for primeng stylings
})
export class LandingComponent implements OnInit, OnDestroy {
  userLoggedIn: any;
  checkUser: Function = () => {
    if (this.auth.loggedIn) {
      this.userLoggedIn = false;
    } else if (!this.auth.loggedIn) {
      this.userLoggedIn = true;
    }
  };
  constructor(private auth: AuthService) {}

  ngOnInit(): void {}
  ngOnDestroy(): void {}
}
