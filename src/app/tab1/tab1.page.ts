import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

import { GetStartedPage } from '../auth/getstarted/get-started.page';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  Popular = [
    {
      profile: '',
      name: 'Jainik Patel',
      time: '2 hour ago',
      postImage: './assets/icon/wall.jpeg',
      commentCount: '31k',
      likeCount: '40k',
    },
  ];
  trending = [
    {
      profile: '',
      name: 'Sahil Patel',
      time: '43 min ago',
      postImage: './assets/icon/wall.jpeg',
      commentCount: '1k',
      likeCount: '6k',
    },
    {
      profile: '',
      name: 'dipak Patel',
      time: '7 hour ago',
      postImage: './assets/icon/abcd2.png',
      commentCount: '1k',
      likeCount: '5k',
    },
    {
      profile: '',
      name: 'dipak Patel',
      time: '1 hour ago',
      postImage: './assets/icon/colors.png',
      commentCount: '11k',
      likeCount: '50k',
    },
  ];
  following = [
    {
      profile: '',
      name: 'dipak Patel',
      time: '1 hour ago',
      postImage: './assets/icon/abcd2.png',
      commentCount: '12k',
      likeCount: '56k',
    },
    {
      profile: '',
      name: 'Jainik Patel',
      time: '2 hour ago',
      postImage: './assets/icon/abcd.png',
      commentCount: '31k',
      likeCount: '40k',
    },
    {
      profile: '',
      name: 'Jainik Patel',
      time: '2 hour ago',
      postImage: './assets/icon/d.png',
      commentCount: '31k',
      likeCount: '40k',
    },
  ];
  selectedSegment = 'following';
  constructor(private navCtrl: NavController) {}

  segmentChanged(e: any) {
    console.log('Sengment Changed :-', e);
  }

  onPostClick() {
    this.navCtrl.navigateForward('post-detail');
  }
}
