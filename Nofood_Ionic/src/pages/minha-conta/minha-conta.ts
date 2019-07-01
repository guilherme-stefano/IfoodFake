import { MinhaContaModel } from './../../app/models/MinhaContaModel';
import { ConfigHelper } from './../../app/helpers/configHelper';
import { UtilsHelper } from './../../app/helpers/utilsHelper';
import { UsuarioProvider } from './../../providers/usuario/usuario';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UsuarioModel } from '../../app/models/UsuarioModel';

/**
 * Generated class for the MinhaContaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-minha-conta',
  templateUrl: 'minha-conta.html',
})
export class MinhaContaPage {

  usuarioLogado:MinhaContaModel = new MinhaContaModel();
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private usuarioSrv:UsuarioProvider ) {
  }

  async LoadData():Promise<void>{
    try{
      let user = <MinhaContaModel>JSON.parse(localStorage.getItem(ConfigHelper.storageKeys.user));
      let userResult = await this.usuarioSrv.getById(user._id);
      if(userResult.success){
        this.usuarioLogado = <MinhaContaModel>userResult.data;
        if(!this.usuarioLogado.foto){
          this.usuarioLogado.foto ="";
        }
      }
   
    }catch(error){
      console.log('Problema ao carregar os dados do usuário');
    }
  }

  ionViewDidLoad(){
    this.LoadData();
  }
}
