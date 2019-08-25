import { ProdutoModel } from './../../app/models/ProdutoModel';
import { Component, Output, EventEmitter, Input, OnInit } from '@angular/core';
import { CarrinhoProvider } from '../../providers/carrinho/carrinho';
import { CarrinhoModel } from '../../app/models/CarrinhoModel';
import { AcaoCarrinhoEnum } from '../../app/enums/AcaoCarrinhoEnum';

/**
 * Generated class for the QuantidadeComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'quantidade',
  templateUrl: 'quantidade.html'
})

export class QuantidadeComponent implements OnInit {
  text: string;
  numero: number = 0;
  @Input('produto') produto : ProdutoModel;
  @Output() quantidadeAlterada = new EventEmitter();
  constructor(private carrinhoSrv: CarrinhoProvider) {
    
  }

  ngOnInit(): void {
    this.numero = this.carrinhoSrv.GetQuantidadeItem(this.produto);
  }

  adicionar(){
    this.numero += 1;
    this.quantidadeAlterada.emit({
      quantidade: this.numero,
      acao: AcaoCarrinhoEnum.Adicionar
    });
  }

  remover(){
    let _valorFinal = this.numero -= 1;
    if(_valorFinal <= 0){
      this.numero = 0;
    }

    this.quantidadeAlterada.emit({
      quantidade: this.numero,
      acao: AcaoCarrinhoEnum.Remover});
  }

}
