import { ConfigHelper } from './../../app/helpers/configHelper';
import { ProdutoModel } from './../../app/models/ProdutoModel';
import { Component, Output, EventEmitter, Input, OnInit } from '@angular/core';
import { CarrinhoProvider } from '../../providers/carrinho/carrinho';
import { AcaoCarrinhoEnum } from '../../app/enums/AcaoCarrinhoEnum';
import { Events } from 'ionic-angular';

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

  constructor(
    private carrinhoSrv: CarrinhoProvider,
    private evt: Events) {
    
  }

  private _registerEvent(){
    this.evt.subscribe(ConfigHelper.Events.atualizacaoQuantidadeProduto, () =>{
      this._atualizarQuantidade();
    });  
  }

  ngOnInit(): void {
    this._atualizarQuantidade();
    this._registerEvent();
  }

  private _atualizarQuantidade(): void {
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
