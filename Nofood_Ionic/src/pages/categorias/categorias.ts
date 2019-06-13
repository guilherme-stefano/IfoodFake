import { CategoriaModel } from './../../app/models/CategoriaModel';
import { CategoriaProvider } from './../../providers/categoria/categoria';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';

/**
 * Generated class for the CategoriasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-categorias',
  templateUrl: 'categorias.html',
})
export class CategoriasPage {

  categorias: Array<CategoriaModel> = new Array<CategoriaModel>();
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private categoriaSrv: CategoriaProvider,
    public actionSheetCtrl: ActionSheetController) {
  }

  ionViewWillEnter(){
    this.load();
  }

  async load(): Promise<void>{
    try{
      let categoriaResult = await this.categoriaSrv.get();
      if(categoriaResult.success){
        this.categorias = <Array<CategoriaModel>>categoriaResult.data;
      }
    } catch(error){

    }
  }

  
  adminOptions(): void{
    let action = this.actionSheetCtrl.create({
      title: "Administração",
      buttons: [
        {text: 'Gerenciar Categorias', handler:() => {this.gerenciarCategoria()}},
        {text: 'Gerenciar Produtos', handler:() => {this.gerenciarProdutos()}},
        {text: 'Cancelar', handler:() => {}, role:'destructive' }
      ]
    });
    action.present();
  }

  abrirProduto(): void {
    this.navCtrl.setRoot('TabsPage');
  }

  private gerenciarCategoria() :void{
    this.navCtrl.push('AdmCategoriasPage');
  }

  private gerenciarProdutos() :void{
    this.navCtrl.push('AdmProdutosPage');
  }


}
