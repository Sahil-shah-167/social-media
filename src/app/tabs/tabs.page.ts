import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
})
export class TabsPage {
  selectedTab = '';

  constructor(private navctrl: NavController) {}

  onTabsChange(e) {
    console.log(e);
    this.selectedTab = e.tab;
    console.log('Seleted Value :- ', this.selectedTab);
  }

  onaddClick() {
    this.navctrl.navigateForward('addcollection');
  }
}
