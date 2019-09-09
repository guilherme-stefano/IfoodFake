import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CarrinhoProvider } from '../../providers/carrinho/carrinho';
import { CarrinhoModel } from '../../app/models/CarrinhoModel';
import { ProdutoModel } from '../../app/models/ProdutoModel';
import { AcaoCarrinhoEnum } from '../../app/enums/AcaoCarrinhoEnum';


@IonicPage()
@Component({
  selector: 'page-carrinho',
  templateUrl: 'carrinho.html',
})
export class CarrinhoPage {

  produtos: any;
  totalProdutos: number = 0.00;
  carrinho: CarrinhoModel = new CarrinhoModel();

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private carrinhoSrv: CarrinhoProvider) {
      this.carrinhoSrv.getTesteSingleton();
  }

  ionViewDidLoad() {
    this.carrinhoSrv.getCarrinho().subscribe(data => {
      this.carrinho = data;  
    })
  }

  quantidadeAlterada(produto:ProdutoModel, evt:any):void{
    console.log(`${produto.nome} : quantidade ${evt.quantidade} - acao: ${evt.acao}`);  
    if(evt.acao == AcaoCarrinhoEnum.Adicionar)
      this.carrinhoSrv.adicionarNovoItem(produto);
    else 
      this.carrinhoSrv.removerItem(produto);
  }

}
