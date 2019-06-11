import { Injectable } from '@angular/core';
import { ProviderBase } from '../../app/base/providerBase';
import { ProdutoModel } from '../../app/models/ProdutoModel';
import { HttpProvider } from '../http/http';
import { ConfigHelper } from '../../app/helpers/configHelper';

/*
  Generated class for the ProdutoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProdutoProvider  extends ProviderBase<ProdutoModel> {

  constructor(public http: HttpProvider) {
    super( `${ConfigHelper.Url}/produto`, http);
    console.log('Hello ProdutoProvider Provider');
  }

}
