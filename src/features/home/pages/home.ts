import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

import { BasePage } from './../../../shared/base.page';

@IonicPage({
  segment: 'home',
  priority: 'high',
})

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage extends BasePage {

  constructor() {
    super();
  }

}
