import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

import { GetStartedPage } from '../auth/getstarted/get-started.page';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  popular = [
    {
      profile: '',
      name: 'Jainik Patel',
      time: '1 hour ago',
      postImage: './assets/icon/wall.jpeg',
      commentCount: '31k',
      likeCount: '50k',
    },
  ];
  trending = [
    {
      profile: '',
      name: 'Sahil Patel',
      time: '1 hour ago',
      postImage: './assets/icon/wall.jpeg',
      commentCount: '21k',
      likeCount: '50k',
    },
  ];
  following = [
    {
      profile: '',
      name: 'dipak Patel',
      time: '1 hour ago',
      postImage: './assets/icon/abcd2.png',
      commentCount: '1k',
      likeCount: '50k',
    },
  ];
  selectedSegment = 'popular';
  constructor(private navCtrl: NavController) {}

  segmentChanged(e: any) {
    console.log('Sengment Changed :-', e);
  }

  onPostClick() {
    this.navCtrl.navigateForward('post-detail');
  }
}
