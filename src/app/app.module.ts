import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';

import {MainSlider} from "../_1_MainSlider";

declare var jQuery: any;

@Component({
  template: '<ion-nav [root]="rootPage"></ion-nav>'
})
export class MyApp {

  rootPage:any = MainSlider;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {

      //manual loading of the favicon
      jQuery('link[rel="icon"]').attr("href","assets/img/favicon/favicon.png?anticache="+ Math.random());

      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}


@NgModule({
  declarations: [
    MyApp,
    MainSlider,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      mode: "md",
      pageTransition: 'md-transition'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MainSlider
],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
    ]
})
export class AppModule {}
