import { ProdutoModel } from './../../app/models/ProdutoModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { CarrinhoModel } from '../../app/models/CarrinhoModel';
import { CarrinhoItemModel } from '../../app/models/CarrinhoItemModel';


@Injectable()
export class CarrinhoProvider {
  
  private _carrinho: CarrinhoModel = new CarrinhoModel();
  private carrinho: Observable<CarrinhoModel>;
  private carrinhoObservable:any;

  constructor(public http: HttpClient) {
    this.carrinho = Observable.create(obs => {
      this.carrinhoObservable = obs;
    });
  }

  getCarrinho():Observable<CarrinhoModel>{
    return this.carrinho;
  }

  adicionarNovoItem(item: ProdutoModel):void{
    let newProduto = new CarrinhoItemModel();
    newProduto.Produto =  item;
    newProduto.Quantidade = 1;
   
    this._carrinho.itens.push(newProduto);
    this._carrinho.itens.forEach((item : CarrinhoItemModel) => {
      this._carrinho.valorTotal += item.Produto.preco;
    })
    
    this.carrinhoObservable.next(this._carrinho);

  
  }

}
