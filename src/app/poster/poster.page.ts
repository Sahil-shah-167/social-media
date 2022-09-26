import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-poster',
  templateUrl: './poster.page.html',
  styleUrls: ['./poster.page.scss'],
})
export class PosterPage implements OnInit {
  constructor(private navctrl: NavController) {}

  ngOnInit() {}

  onarrowClick() {
    this.navctrl.navigateBack('instaprofile');
  }
}
