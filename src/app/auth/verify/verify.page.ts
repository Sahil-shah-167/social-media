import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.page.html',
  styleUrls: ['./verify.page.scss'],
})
export class VerifyPage implements OnInit {
  constructor(private navctrl: NavController) {}

  ngOnInit() {}

  onverifyClick() {
    this.navctrl.navigateForward('explore');
  }
}
