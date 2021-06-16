
import { Component, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';
declare let $: any;
import { WINDOW } from "./services/window.service";


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  animated= false;
  constructor() {
  }

  ionScroll() {}
  onPageScroll(e) {}

  ionViewDidLoad() {
  }
  
  ngOnInit() {
  }
}
