import { AcaoCarrinhoEnum } from './../../app/enums/AcaoCarrinhoEnum';
import { CarrinhoProvider } from './../../providers/carrinho/carrinho';
import { HttpResultModel } from './../../app/models/HttpResultModel';
import { ProdutoModel } from './../../app/models/ProdutoModel';
import { ConfigHelper } from './../../app/helpers/configHelper';
import { CategoriaModel } from './../../app/models/CategoriaModel';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { ProdutoProvider } from '../../providers/produto/produto';
import { CarrinhoModel } from '../../app/models/CarrinhoModel';

@IonicPage()
@Component({
  selector: 'page-produtos',
  templateUrl: 'produtos.html',
})
export class ProdutosPage {

  categoriaSelecionada: CategoriaModel = new CategoriaModel();
  produtos: Array<ProdutoModel> = new Array<ProdutoModel>();
  carrinho:CarrinhoModel  = new CarrinhoModel();
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private carrinhoSrv: CarrinhoProvider,
    private produtoSrv: ProdutoProvider,
    public modalCtrl: ModalController) {
  }

  ionViewWillEnter(){
    this.carrinhoSrv.getCarrinho().subscribe(
      data => {
        this.carrinho = data;
        console.log(this.carrinho);
    });
    this.categoriaSelecionada = <CategoriaModel>JSON.parse(localStorage.getItem(ConfigHelper.storageKeys.selectCategory));
    this.load();
  }

  async load():Promise<void>{
    try {
      let produtosResult = await this.produtoSrv.produtosByCategoriaId(this.categoriaSelecionada._id);
      if(produtosResult.success)
      this.produtos = <Array<ProdutoModel>>produtosResult.data;
      console.log(this.produtos);
    } catch (error) {
      console.log('Problema ao carregar os produtos', error);
    }
  }

  quantidadeAlterada(produto:ProdutoModel, evt:any):void{
    console.log(`${produto.nome} : quantidade ${evt.quantidade} - acao: ${evt.acao}`);  
    if(evt.acao == AcaoCarrinhoEnum.Adicionar)
      this.carrinhoSrv.adicionarNovoItem(produto);
    else 
      this.carrinhoSrv.removerItem(produto);
  }

  visualizarProduto(item: ProdutoModel){
    let modal = this.modalCtrl.create('VisualisarProdutoPage', {produto:item});
    modal.present();
  }

  visualizarCarrinho():void {
    this.navCtrl.push('CarrinhoPage', {});
  }

}
