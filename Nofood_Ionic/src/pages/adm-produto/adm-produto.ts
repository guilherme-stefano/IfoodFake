import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, Platform } from 'ionic-angular';
import { ProdutoProvider } from '../../providers/produto/produto';
import { CameraProvider } from '../../providers/camera/camera';
import { AlertProvider } from '../../providers/alert/alert';
import { ProdutoModel } from '../../app/models/ProdutoModel';


/**
 * Generated class for the AdmProdutoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-adm-produto',
  templateUrl: 'adm-produto.html',
})
export class AdmProdutoPage {

  produto: ProdutoModel;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public actionSheetCtrl: ActionSheetController,
    public platform: Platform,
    private cameraSrv: CameraProvider,
    private produtoSrv:ProdutoProvider,
    private alertSrv:AlertProvider) {
      let categ = this.navParams.get('_produto');
      if(categ)
        this.produto = <ProdutoModel>categ;
      else 
      this.produto = new ProdutoModel();
  }


  async salvar():Promise<void>{
    let sucesso = false;
    if(!this.produto._id){
      let produtoResult = await this.produtoSrv.post(this.produto);
      sucesso = produtoResult.success;
    } else{
      let updateResult = await this.produtoSrv.put(this.produto._id, this.produto);
      sucesso = updateResult.success;
    }

    if (sucesso) {
      this.alertSrv.toast('Produto Salvo com sucesso!', 'botton');
      this.navCtrl.setRoot('AdmProdutosPage');
    }
  }

  

}
