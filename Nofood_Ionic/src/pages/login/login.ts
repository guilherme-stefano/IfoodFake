import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UsuarioProvider } from '../../providers/usuario/usuario';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  form:any = {};

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public usuarioSrv: UsuarioProvider
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  async login():Promise<void>{
    let result = await this.usuarioSrv.autenticate(this.form.email, this.form.senha);
    //this.navCtrl.setRoot('CategoriasPage');
    if(result.success){
      UsuarioProvider.RegisterLogin(result.data);
      console.log(result.data);
      this.navCtrl.setRoot('CategoriasPage');
    }
  }

  cadastrar():void{
    this.navCtrl.setRoot('CadastroPage');
  }

}
