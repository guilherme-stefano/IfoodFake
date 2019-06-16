import { Component } from '@angular/core';

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
export class QuantidadeComponent {

  text: string;
  numero: number = 1;

  constructor() {
  }

  adicionar(){
    this.numero += 1;
  }

  remover(){
    let _valorFinal = this.numero -= 1;
    if(_valorFinal == 0){
      this.numero = 1;
    }
  }

}
