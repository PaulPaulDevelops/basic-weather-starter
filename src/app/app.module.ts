import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { WeatherAppComponent } from './app.component';

import { HomeModule } from './../features/home/home.module';

import { SharedModule } from './../shared/shared.module';

@NgModule({
  declarations: [WeatherAppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(WeatherAppComponent),
    SharedModule,
    HomeModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [WeatherAppComponent],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
