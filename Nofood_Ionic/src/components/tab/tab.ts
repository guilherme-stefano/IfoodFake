import { Component, Input, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'tab',
  templateUrl: 'tab.html'
})
export class TabComponent implements OnInit {

  @Input('pagina') pagina: string;
  tabs: Array<{icon:string, path:string, label: string, isSelect:boolean}>
  
  constructor(private navCtrl: NavController) {
  }

  ngOnInit(): void {
    this.tabs = [
      {icon:'pricetags', path:'CategoriasPage', label: 'Categorias', isSelect: this.pagina=='Categorias'},
      {icon:'menu', path:'MeusPedidosPage', label: 'Meus Pedidos', isSelect: this.pagina=='Meus Pedidos'},
      {icon:'contact', path:'MinhaContaPage', label: 'Minha Conta', isSelect: this.pagina=='Minha Conta'}
      ];
  }

  selecionarTab(path:string):void{
    this.navCtrl.setRoot(path);
  }

}
