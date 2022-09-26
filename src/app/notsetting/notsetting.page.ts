import { Component, OnInit } from '@angular/core';

export interface Collection {
  collectionName: string;
}

@Component({
  selector: 'app-notsetting',
  templateUrl: './notsetting.page.html',
  styleUrls: ['./notsetting.page.scss'],
})
export class NotsettingPage implements OnInit {
  collection: Collection[] = [
    {
      collectionName: 'collectons',
    },
    {
      collectionName: 'Comment Likes',
    },
    {
      collectionName: 'Likes',
    },
    {
      collectionName: 'Followers',
    },
    {
      collectionName: 'Donate',
    },
  ];

  constructor() {}

  ngOnInit() {}
}
