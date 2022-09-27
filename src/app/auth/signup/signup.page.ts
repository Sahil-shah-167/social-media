import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  name: string = '';
  email: string = '';
  password: string = '';
  constructor(
    private router: Router,
    private navCtrl: NavController,
    private http: HttpClient
  ) {}

  ngOnInit() {}
  onSignupClick() {
    // this.router.navigateByUrl('login');
    this.navCtrl.navigateBack('login');
  }

  onLoginClick() {
    if (!this.name) {
      return;
    }
    if (!this.email) {
      return;
    }
    if (!this.password) {
      return;
    }

    const data = {
      name: this.name,
      password: this.password,
      email: this.email,
    };
    this.http.post('http://localhost:3000/users', data).subscribe(
      (res: any) => {
        console.log(res);
        this.router.navigateByUrl('verify');
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
