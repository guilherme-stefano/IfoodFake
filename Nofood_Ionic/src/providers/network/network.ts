import { Platform } from 'ionic-angular';
import { Injectable } from '@angular/core';

declare var navigator: any;
declare var Connection: any;

@Injectable()
export class NetworkProvider {

  constructor(private platform: Platform) {

  }

  get IsOnline(): boolean {
    if (this.platform.is('cordova')) {
      if (navigator.connection && navigator.connection.type) {
        return (navigator.connection.type != Connection.UNKKONW && navigator.connection.type != Connection.NONE);
      }
      else
        return true;
    } else {
      return navigator.onLine;
    }
  }

}
