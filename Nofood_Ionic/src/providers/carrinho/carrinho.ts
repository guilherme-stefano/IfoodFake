import { ConfigHelper } from './../../app/helpers/configHelper';
import { ProdutoModel } from './../../app/models/ProdutoModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { CarrinhoModel } from '../../app/models/CarrinhoModel';
import { CarrinhoItemModel } from '../../app/models/CarrinhoItemModel';
import { Events } from 'ionic-angular';


@Injectable()
export class CarrinhoProvider {
  
  private _carrinho: CarrinhoModel = new CarrinhoModel();
  private carrinho: Observable<CarrinhoModel>;
  private carrinhoObservable:any;
  private testeSingleto:number;

  constructor(
    public http: HttpClient,
    public evt:Events) {
    this._carrinho.itens = new Array<CarrinhoItemModel>();
    this._carrinho.valorTotal = 0.0;
    //inicializando nosso carrinho
    this._carrinho.datahota = new Date();
    // inicializando nosso observable
    this.carrinho = Observable.create(obs => {
      this.carrinhoObservable = obs;
      this.carrinhoObservable.next(this._carrinho);
    });
  }

  public setTesteSingleton(){
    this.testeSingleto = 1;
  }

  public getTesteSingleton(){
    console.log(this.testeSingleto);
  }

  public getCarrinho():Observable<CarrinhoModel>{
    return this.carrinho;
  }

  public adicionarNovoItem(item: ProdutoModel): void{
    let existe = false;
    this._carrinho.itens.forEach(carrinhoItem => {
      if(carrinhoItem.Produto._id == item._id){
        carrinhoItem.Quantidade++;
        existe = true;
      }
    });
    if(!existe){
      let newProduto = new CarrinhoItemModel();
      newProduto.Produto =  item;
      newProduto.Quantidade = 1;
      this._carrinho.itens.push(newProduto);
    }

    this._calcularCarrinho();
    this.evt.publish(ConfigHelper.Events.atualizacaoQuantidadeProduto, {})
    this.carrinhoObservable.next(this._carrinho);
  }

  public removerItem(item: ProdutoModel): void{
    for (let index = 0; index < this._carrinho.itens.length; index++) {
      const prod =  this._carrinho.itens[index];
      if(prod.Produto._id == item._id){
        if(prod.Quantidade <= 1){
          this._carrinho.itens.splice(index,1);  
        } else {
          this._carrinho.itens[index].Quantidade--;
        }
      }
    }
    this._calcularCarrinho();
    this.evt.publish(ConfigHelper.Events.atualizacaoQuantidadeProduto, {})
    this.carrinhoObservable.next(this._carrinho);
  }

  private _calcularCarrinho(): void{
    this._carrinho.valorTotal = 0;
    this._carrinho.itens.forEach( prod =>{
      this._carrinho.valorTotal += (prod.Produto.preco * prod.Quantidade)
    })
  }

  public GetQuantidadeItem(item: ProdutoModel): number{
    let prod  = this._carrinho.itens.filter(x => x.Produto._id == item._id)[0];
    if(prod)
      return prod.Quantidade;
    else
      return 0;
    
  }

}
