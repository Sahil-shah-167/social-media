import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-challenge',
  templateUrl: './challenge.page.html',
  styleUrls: ['./challenge.page.scss'],
})
export class ChallengePage implements OnInit {
  constructor(private navctrl: NavController) {}

  ngOnInit() {}
  onsubmitClick() {
    this.navctrl.navigateForward('viewphoto');
  }
}
