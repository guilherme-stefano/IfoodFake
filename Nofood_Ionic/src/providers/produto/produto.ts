import { Injectable } from '@angular/core';
import { ProviderBase } from '../../app/base/providerBase';
import { ProdutoModel } from '../../app/models/ProdutoModel';
import { HttpProvider } from '../http/http';
import { ConfigHelper } from '../../app/helpers/configHelper';
import { HttpResultModel } from '../../app/models/HttpResultModel';
import { HttpErrorResponse, HttpClient, HttpHeaders } from '@angular/common/http';


import { Observable,  } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { UsuarioProvider } from '../usuario/usuario';
/*
  Generated class for the ProdutoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

export interface ProdutoInterface  {
  _id: string;
  nome: string;
  descricao:string;
  ativo:string;
  preco:string;
  foto:string;
  categoriaId:any;
  dataCriacao:string;
}

@Injectable()
export class ProdutoProvider  extends ProviderBase<ProdutoModel> {

  constructor(public http: HttpProvider,
    public httpClient: HttpClient,) {
    super( `${ConfigHelper.Url}/produto`, http);
  }

  async produtosByCategoriaId(id:string): Promise<HttpResultModel>{
    return this.http.get(`${this.url}/categoria/${id}`)
  }

  
  public createHeader(header?: HttpHeaders): HttpHeaders{
    if(!header) {
      header = new HttpHeaders();
    }
    header = header.append('Content-Type', 'application/json');
    header = header.append('Accept',  'application/json');

    let token = UsuarioProvider.GetTokenAccess;

    if(token){
      header = header.append('x-access-token', token);
    }

    return header;
  }
  
  ProdutosByCategoriaIdPipe(id:string) {
    let header = this.createHeader();
     var produtos = this.httpClient.get<ProdutoModel[]>(`${this.url}/categoria/${id}`, {headers: header})
      .pipe(
        retry(3), // retry a failed request up to 3 times
        catchError(this.handleError) // then handle the error
      );
      return produtos
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return ErrorObservable.create(
      'Something bad happened; please try again later.');
  };
}
