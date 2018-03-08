import { ViewChild, OnDestroy } from '@angular/core';

import { Navbar } from 'ionic-angular';

import { Subject } from 'rxjs/Subject';

export class BasePage implements OnDestroy {
	@ViewChild(Navbar) protected navbar: Navbar;
	
  protected destroyOn = { willLeave: true, didLeave: false };
  protected destroy$: Subject<boolean> = new Subject();

  constructor() {}

  ionViewWillLeave() {
    if (this.destroyOn.willLeave) {
      this.destroy$.next(true);
    }
  }

  ionViewDidLeave() {
    if (this.destroyOn.didLeave) {
      this.destroy$.next(true);
    }
  }

  ionViewWillUnload() {
    this.destroy$.next(true);
  }

  ngOnDestroy() {
    this.destroy$.next(true);
  }
}