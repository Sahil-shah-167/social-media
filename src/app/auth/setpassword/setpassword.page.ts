import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-setpassword',
  templateUrl: './setpassword.page.html',
  styleUrls: ['./setpassword.page.scss'],
})
export class SetpasswordPage implements OnInit {
  constructor(private navctrl: NavController) {}

  ngOnInit() {}
  onsendClick() {
    this.navctrl.navigateBack('login');
  }
}
