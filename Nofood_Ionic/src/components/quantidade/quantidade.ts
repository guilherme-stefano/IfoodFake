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

  constructor() {
    console.log('Hello QuantidadeComponent Component');
    this.text = 'Hello World';
  }

}
