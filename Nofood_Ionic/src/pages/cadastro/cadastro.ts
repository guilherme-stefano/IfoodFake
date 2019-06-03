import { AlertProvider } from './../../providers/alert/alert';
import { UsuarioProvider } from './../../providers/usuario/usuario';
import { UsuarioModel } from './../../app/models/UsuarioModel';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
/**
 * Generated class for the CadastroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {

  usuario:UsuarioModel = new UsuarioModel();

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private usuarioSrv: UsuarioProvider,
    private alertSrv: AlertProvider) {

  }

  async cadastrar():Promise<void>{
    let cadastroResult = await this.usuarioSrv.register(this.usuario);
    if(cadastroResult.success){
      this.alertSrv.toast('Cadastro realizado com sucesso!', 'botton');
      this.navCtrl.setRoot('LoginPage');
    }
  }

  cancelar(){
    this.navCtrl.setRoot('LoginPage');
  }

}
