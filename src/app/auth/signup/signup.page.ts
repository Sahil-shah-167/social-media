import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  constructor(private router: Router, private navCtrl: NavController) {}

  ngOnInit() {}
  onSignupClick() {
    // this.router.navigateByUrl('login');
    this.navCtrl.navigateBack('login');
  }

  onLoginClick() {
    this.router.navigateByUrl('verify');
  }
}
