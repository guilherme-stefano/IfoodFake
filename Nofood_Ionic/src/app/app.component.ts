import { ConfigHelper } from './helpers/configHelper';
import { UsuarioProvider } from './../providers/usuario/usuario';
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { OneSignal, OSDisplayType } from '@ionic-native/onesignal';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = UsuarioProvider.IsLogado ? 'CategoriasPage' : 'LoginPage';

  constructor(
    private platform: Platform, 
    private oneSignal: OneSignal,
    statusBar: StatusBar,
    splashScreen: SplashScreen)
  {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      this._configOneSignal();
    });
  }

  private _configOneSignal():void{
    if(this.platform.is('cordova')){

      // window["plugins"].OneSignal
      // .startInit('991c0c3a-ce0e-4fc0-8ce2-bd3bd9bb3b1e')
      // .handleNotificationOpened(OSDisplayType.Notification)
      // .handleNotificationReceived().subscribe(data => {
      //   console.log('NotificacaoRecebida', data);
      // })
      // .handleNotificationOpened().subscribe(data => {
      //   console.log('NotificacaoAberta', data);
      // })
      // .getIds().then(result => {
      //   localStorage.setItem(ConfigHelper.storageKeys.oneSignalUid, result.userId);
      //   console.log('OneSignal', JSON.stringify(result));
      // })
      // .endInit();
      this.oneSignal.startInit('991c0c3a-ce0e-4fc0-8ce2-bd3bd9bb3b1e');
      this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.Notification);
      this.oneSignal.handleNotificationReceived().subscribe(data => {
        console.log('NotificacaoRecebida', data);
      });

      this.oneSignal.handleNotificationOpened().subscribe(data => {
        console.log('NotificacaoAberta', data);
      });

      this.oneSignal.getIds().then(result => {
        localStorage.setItem(ConfigHelper.storageKeys.oneSignalUid, result.userId);
        console.log('OneSignal', JSON.stringify(result));
      });

      this.oneSignal.endInit();
    }
  }
}

