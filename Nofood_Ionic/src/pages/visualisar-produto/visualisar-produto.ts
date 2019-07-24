import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { ProdutoModel } from '../../app/models/ProdutoModel';

/**
 * Generated class for the VisualisarProdutoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-visualisar-produto',
  templateUrl: 'visualisar-produto.html',
})
export class VisualisarProdutoPage {

  produto: ProdutoModel = new ProdutoModel();

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public ViewCtrl: ViewController) {
     
  }

  ionViewDidLoad() {
    this.produto = <ProdutoModel>this.navParams.get('produto');
  }

  voltar(){
    this.ViewCtrl.dismiss();
  }

}
