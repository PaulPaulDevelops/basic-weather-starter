import { HomeModule } from './../../home/home.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { HomePage } from './home';

@NgModule({
  declarations: [HomePage],
  imports: [
    IonicPageModule.forChild(HomePage),
    HomeModule,
  ],
  exports: [HomePage],
})
export class HomeRootPageModule {}
