import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

export interface Collection {
  image: string;
  collectionName: string;
}

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  collection: Collection[] = [
    {
      image: 'assets/icon/wall.jpeg',
      collectionName: ' PHOTOGRAPHY',
    },
    {
      image: 'assets/icon/abcd2.png',
      collectionName: 'IILUSTRATION',
    },
    {
      image: 'assets/icon/colors.png',
      collectionName: 'DESIGN',
    },
    {
      image: 'assets/icon/girl(1).png',
      collectionName: 'MAKING VIDEO',
    },
    {
      image: 'assets/icon/abcd.png',
      collectionName: 'Editing',
    },
    {
      image: 'assets/icon/colors.png',
      collectionName: 'Portrait',
    },
  ];

  constructor(private navctrl: NavController) {}
  onphotoClick() {
    this.navctrl.navigateForward('challenge');
  }

  ngOnInit() {}
}
