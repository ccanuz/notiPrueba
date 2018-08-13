import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { NoticiasService } from '../services/noticias.services';
import { DetallePage } from '../pages/detalle/detalle';

import { AngularFireModule} from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database/database.module';
import { AngularFireAuthModule} from 'angularfire2/auth/auth.module';

export const firebaseConfig = {
  piKey: "AIzaSyD0sH_9XpYupnpaiwUMUod5HEzxGtsONAQ",
  authDomain: "prueba2018-3bfdc.firebaseapp.com",
  databaseURL: "https://prueba2018-3bfdc.firebaseio.com",
  storageBucket: "prueba2018-3bfdc.appspot.com",
  messagingSenderId: "937283723148"
}

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    DetallePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    DetallePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    NoticiasService
  ]
})
export class AppModule {}
