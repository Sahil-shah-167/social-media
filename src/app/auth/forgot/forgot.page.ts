import { Component, OnInit } from '@angular/core';
import { Navigation } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.page.html',
  styleUrls: ['./forgot.page.scss'],
})
export class ForgotPage implements OnInit {
  constructor(private navCtrl: NavController) {}

  ngOnInit() {}

  onsendClick() {
    this.navCtrl.navigateForward('setpassword');
  }
}
