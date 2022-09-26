import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-chating',
  templateUrl: './chating.page.html',
  styleUrls: ['./chating.page.scss'],
})
export class ChatingPage implements OnInit {
  constructor(private navctrl: NavController) {}

  ngOnInit() {}
  onarrowClick() {
    this.navctrl.navigateBack('message');
  }
}
