import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-addcollection',
  templateUrl: './addcollection.page.html',
  styleUrls: ['./addcollection.page.scss'],
})
export class AddcollectionPage implements OnInit {
  constructor(private navctrl: NavController) {}

  ngOnInit() {}
  onchipClick() {
    this.navctrl.navigateForward('createcollection');
  }
}
