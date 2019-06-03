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

  async register(usuario:UsuarioModel) :  Promise<HttpResultModel>{
    return this.http.post(`${this.url}/register`, usuario);
  }

  static RegisterLogin(result:any) {
    localStorage.setItem(ConfigHelper.storageKeys.token, result.token);
    localStorage.setItem(ConfigHelper.storageKeys.user, JSON.stringify(result.usuario));
  }

  static get IsLogado(): boolean{
    return localStorage.getItem(ConfigHelper.storageKeys.token) != undefined;
  }

  static get GetTokenAccess(): string{
    return localStorage.getItem(ConfigHelper.storageKeys.token);
  }

}
