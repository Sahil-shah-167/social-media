import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-instaprofile',
  templateUrl: './instaprofile.page.html',
  styleUrls: ['./instaprofile.page.scss'],
})
export class InstaprofilePage implements OnInit {
  constructor(private navctrl: NavController) {}

  ngOnInit() {}
  onposterClick() {
    this.navctrl.navigateForward('poster');
  }
  onmessageClick() {
    this.navctrl.navigateForward('message');
  }
  onarrowClick() {
    this.navctrl.navigateBack('tab5');
  }
}
