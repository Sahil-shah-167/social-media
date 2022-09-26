import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

export interface Collection {
  image: string;
  collectionName: string;
  photoCount: number;
}

export interface topic {
  image1: string;
  collectionName1: string;
}

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  collection: Collection[] = [
    {
      image: 'assets/icon/collection1.png',
      collectionName: 'PORTRAIT PHOTOGRAPHY',
      photoCount: 75,
    },
    {
      image: 'assets/icon/collection1.png',
      collectionName: 'MUSIC VIDEO',
      photoCount: 10,
    },
    {
      image: 'assets/icon/collection1.png',
      collectionName: 'EDITING',
      photoCount: 15,
    },
  ];

  Topic: topic[] = [
    {
      image1: 'assets/icon/d.png',
      collectionName1: 'PHOTOGRAPHY',
    },
    {
      image1: 'assets/icon/c.png',
      collectionName1: 'UI DESIGN',
    },
    {
      image1: 'assets/icon/d.png',
      collectionName1: 'PORTRAIT PHOTO',
    },
  ];
  constructor(private navctrl: NavController) {}

  ngOnInit() {}

  onviewClick() {
    this.navctrl.navigateForward('search');
  }
  onview1Click() {
    this.navctrl.navigateForward('challenge');
  }
}
