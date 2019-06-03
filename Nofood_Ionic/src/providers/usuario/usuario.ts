import { Injectable } from '@angular/core';
import { UsuarioModel } from '../../app/models/UsuarioModel';
import { ProviderBase } from '../../app/base/providerBase';
import { HttpProvider } from '../http/http';
import { ConfigHelper } from '../../app/helpers/configHelper';
import { HttpResultModel } from '../../app/models/HttpResultModel';

@Injectable()
export class UsuarioProvider extends ProviderBase<UsuarioModel>{

 

  constructor(public http: HttpProvider) {
    super( `${ConfigHelper.Url}/usuario`, http);
    console.log('Hello UsuarioProvider Provider');
  }

  async autenticate(email:string, senha:string): Promise<HttpResultModel>{
    return this.http.post(`${this.url}/autenticar`, {email:email, senha:senha});
  }

}
