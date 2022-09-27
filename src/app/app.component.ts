import { Component, OnInit } from '@angular/core';
import { StatusBar, Style } from '@capacitor/status-bar';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {
    this.intiazeApp();
  }

  intiazeApp() {
    StatusBar.setStyle({ style: Style.Light });
    StatusBar.setBackgroundColor({ color: '#ffffff' });
  }
}
