import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  onforgotClick() {
    this.router.navigateByUrl('forgot');
  }

  onSignupClick() {
    this.router.navigateByUrl('signup');
  }

  onLoginClick() {
    this.router.navigateByUrl('explore');
  }
}
