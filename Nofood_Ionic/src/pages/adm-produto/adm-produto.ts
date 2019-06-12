import { CategoriaProvider } from './../../providers/categoria/categoria';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, Platform } from 'ionic-angular';
import { ProdutoProvider } from '../../providers/produto/produto';
import { CameraProvider } from '../../providers/camera/camera';
import { AlertProvider } from '../../providers/alert/alert';
import { ProdutoModel } from '../../app/models/ProdutoModel';
import { CategoriaModel } from '../../app/models/CategoriaModel';


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
  categorias: Array<CategoriaModel> = new Array<CategoriaModel>();
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public actionSheetCtrl: ActionSheetController,
    public platform: Platform,
    private cameraSrv: CameraProvider,
    private produtoSrv:ProdutoProvider,
    private CategoriaSrv: CategoriaProvider,
    private alertSrv:AlertProvider) {
      let _prod = this.navParams.get('_produto');
      if(_prod){
        this.produto = <ProdutoModel>_prod;
        this.produto.categoriaId = _prod.categoriaId._id;
      }
      else{ 
        this.produto = new ProdutoModel();
      }

      this._loadData();
  }

  async _loadData(): Promise<void>{
    try{
      let categoriasResult = await this.CategoriaSrv.get();
      if(categoriasResult.success){
        this.categorias = <Array<CategoriaModel>>categoriasResult.data;
      }
    }catch(error){
      console.log('Erro ao carregar as categorias', error);
    }
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

  async excluir():Promise<void>{
    try {
      this.alertSrv.confirm('Excluir', `Você realmente deseja excluir o produto ${this.produto.nome}`, async () => {
        let excluirResult = await this.produtoSrv.delete(this.produto._id);
        if(excluirResult.success){
          this.alertSrv.toast('Produto excluído com sucesso!', 'botton');
          this.navCtrl.setRoot('AdmProdutosPage');
        }
      });
    } catch (error) {
      console.log('Erro ao excluir');
    }
  }

  
  getPictureOption(): void {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Adicionar foto',
      buttons: [
        {
          text: 'Tirar Foto', handler: () => {
            this.cameraSrv.takePicture(photo => {
              this.produto.foto = photo;
            });
          },
          icon: this.platform.is('ios') ? null : 'camera'
        },
        {
          text: 'Pegar galeria',
          handler: (() => {
            this.cameraSrv.getPictureFromGalery(photo => {
              this.produto.foto = photo;
            });
          }),
          icon: this.platform.is('ios') ? null : 'images'
        },
        {
          text: 'Cancelar',
          role: 'destructive',
          icon: this.platform.is('ios') ? null : 'close',
          handler: () => {
            //Cancela a ação
          }
        }
      ]
    });
    actionSheet.present();
  }

}
