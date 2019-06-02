import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Tabs, App } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  @ViewChild('mainTabs') mainTabs: Tabs;

  constructor(public navCtrl: NavController, public navParams: NavParams, private app: App) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

  selecionarCategoria(event): void {
    let navegacaoAnterior = event.linker._history[event.linker._history.length - 2];
    if (event.tabTitle == 'Categorias' && navegacaoAnterior != '/categorias')
      this.app.getRootNav().setRoot('CategoriasPage');
  }
  
}
