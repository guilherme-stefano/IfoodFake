import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'tab',
  templateUrl: 'tab.html'
})
export class TabComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
    this.tabs = [
      {icon:'pricetags', path:'CategoriasPage', label: 'Categorias', isSelect: this.pagina=='Categorias'},
      {icon:'menu', path:'MeusPedidosPage', label: 'Meus Pedidos', isSelect: this.pagina=='Meus Pedidos'},
      {icon:'contact', path:'MinhaContaPage', label: 'Minha Conta', isSelect: this.pagina=='Minha Conta'}
      ];
  }

  @Input('pagina') pagina: string;
  tabs: Array<{icon:string, path:string, label: string, isSelect:boolean}>


}
