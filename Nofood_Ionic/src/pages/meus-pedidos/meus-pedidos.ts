import { ListaPedidosModel } from './../../app/models/ListaPedidosModel';
import { CarrinhoProvider } from './../../providers/carrinho/carrinho';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-meus-pedidos',
  templateUrl: 'meus-pedidos.html',
})
export class MeusPedidosPage {

  lista: Array<ListaPedidosModel> = new Array<ListaPedidosModel>();

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private carrinhoSrv: CarrinhoProvider) {
  }

  ionViewDidLoad() {
    this._getPedidos();
  }

  private async _getPedidos(): Promise<void>{
    try{
      let pedidosResult = await this.carrinhoSrv.GetMeusPedidos();
      if(pedidosResult.success){
        this.lista = <Array<ListaPedidosModel>>pedidosResult.data;  
      }
    } catch (error) {
      console.log('Problema ao carregar os pedidos, motivo:', error);
    }

  }

  public contaItem(item: ListaPedidosModel): number{
    return ListaPedidosModel.getTotalItens(item.itens);
  }

}
