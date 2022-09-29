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
      profile: './assets/icon/circledp.png',
      name: 'Thomas.VD',

      time: '10 hour ago',
      postImage: './assets/icon/9w(1).png',
      commentCount: '1k',
      likeCount: '38k',
    },
    {
      profile: './assets/icon/dp.png',
      name: 'Herry',
      time: '2 hour ago',
      postImage: './assets/icon/abcd.png',
      commentCount: '1k',
      likeCount: '4k',
    },
    {
      profile: './assets/icon/circledp.png',
      name: 'krish jem',
      time: '38 min ago',
      postImage: './assets/icon/9w(2).png',
      commentCount: '1.5k',
      likeCount: '8k',
    },
  ];
  trending = [
    {
      profile: './assets/icon/circledp.png',
      name: 'Sahil shah',
      time: '43 min ago',
      postImage: './assets/icon/wall.jpeg',
      commentCount: '1k',
      likeCount: '6k',
    },
    {
      profile: './assets/icon/circledp.png',
      name: 'dipak Patel',
      time: '7 hour ago',
      postImage: './assets/icon/av.png',
      commentCount: '1k',
      likeCount: '5k',
    },
    {
      profile: './assets/icon/circledp.png',
      name: 'dipak Patel',
      time: '1 hour ago',
      postImage: './assets/icon/colors.png',
      commentCount: '11k',
      likeCount: '50k',
    },
  ];
  following = [
    {
      profile: './assets/icon/circledp.png',
      name: 'dipak Patel',
      time: '1 hour ago',
      postImage: './assets/icon/abcd2.png',
      commentCount: '12k',
      likeCount: '56k',
    },
    {
      profile: './assets/icon/circledp.png',
      name: 'Jainik Patel',
      time: '2 hour ago',
      postImage: './assets/icon/abcd.png',
      commentCount: '31k',
      likeCount: '40k',
    },
    {
      profile: './assets/icon/circledp.png',
      name: 'Sahil shah',
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
