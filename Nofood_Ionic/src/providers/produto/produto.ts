import { Injectable } from '@angular/core';
import { ProviderBase } from '../../app/base/providerBase';
import { ProdutoModel } from '../../app/models/ProdutoModel';
import { HttpProvider } from '../http/http';
import { ConfigHelper } from '../../app/helpers/configHelper';
import { HttpResultModel } from '../../app/models/HttpResultModel';

/*
  Generated class for the ProdutoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProdutoProvider  extends ProviderBase<ProdutoModel> {

  constructor(public http: HttpProvider) {
    super( `${ConfigHelper.Url}/produto`, http);
  }

  async produtosByCategoriaId(id:string): Promise<HttpResultModel>{
    return this.http.getByCategoriaId(`${this.url}/categoria`)
  }

}
