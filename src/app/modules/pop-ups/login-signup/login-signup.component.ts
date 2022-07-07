import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-signup',
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.css'],
})
export class LoginSignupComponent implements OnInit, OnChanges {
  @Input() display: boolean | undefined;

  constructor(private auth: AuthService) {}
  ngOnChanges(changes: SimpleChanges): void {}

  ngOnInit(): void {}
}
