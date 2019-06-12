import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProdutoModel } from '../../app/models/ProdutoModel';
import { ProdutoProvider } from '../../providers/produto/produto';

/**
 * Generated class for the AdmProdutosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-adm-produtos',
  templateUrl: 'adm-produtos.html',
})
export class AdmProdutosPage {
  lista: Array<ProdutoModel> = new Array<ProdutoModel>();

  constructor(
    public navCtrl: NavController,
     public navParams: NavParams,
     private produtoSrv: ProdutoProvider) {
  }

  ionViewWillEnter(){
    this._loadData();
  }

  private async _loadData() : Promise<void>{
    let categoriaResult = await this.produtoSrv.get();
    if(categoriaResult.success){
      this.lista = <Array<ProdutoModel>>categoriaResult.data;
    }
  }

  addOrEdit(model?: ProdutoModel): void {
    this.navCtrl.push('AdmProdutoPage',{_produto: model});
  }

}
