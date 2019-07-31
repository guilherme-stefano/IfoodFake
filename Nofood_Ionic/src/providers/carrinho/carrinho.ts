import { ProdutoModel } from './../../app/models/ProdutoModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class CarrinhoProvider {
  
  itens: any = [];
  carrinho: Observable<any>;
  carrinhoObservable:any;

  constructor(public http: HttpClient) {
    this.carrinho = Observable.create(obs => {
      this.carrinhoObservable = obs;
    });
  }

  adicionarNovoItem(item: ProdutoModel):void{
    this.itens.push(item);
    this.carrinhoObservable.next(this.itens);
  }

}
