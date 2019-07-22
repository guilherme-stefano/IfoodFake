import { UsuarioModel } from './../../app/models/UsuarioModel';
import { AlertProvider } from './../../providers/alert/alert';
import { CameraProvider } from './../../providers/camera/camera';
import { ConfigHelper } from './../../app/helpers/configHelper';
import { UsuarioProvider } from './../../providers/usuario/usuario';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-minha-conta',
  templateUrl: 'minha-conta.html',
})
export class MinhaContaPage {

  usuarioLogado: UsuarioModel = new UsuarioModel();

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private usuarioSrv: UsuarioProvider,
    private cameraSrv: CameraProvider,
    public actionSheetCtrl: ActionSheetController,
    private alertSrv: AlertProvider) {

  }

  ionViewDidLoad() {
    this.LoadData();
  }

  mudarFoto(): void {
    let action = this.actionSheetCtrl.create({
      title: 'Foto',
      buttons: [
        { text: 'Limpar', handler: () => { this.usuarioLogado.foto = ConfigHelper.photo; } },
        {
          text: 'Tirar Foto', handler: () => {
            this.cameraSrv.getPictureFromGalery(photo => {
              this.usuarioLogado.foto = photo;
            });
          }
        },
        { text: 'Cancelar', handler: () => { }, role: 'destructive' }
      ]
    });
    action.present();
  }

  async salvar(): Promise<void> {
    try {
      this.usuarioLogado.telefone =  this.usuarioLogado.telefone.toString();
      console.log(this.usuarioLogado.telefone);
      let salvarResult = await this.usuarioSrv.put(this.usuarioLogado._id, this.usuarioLogado);
      if (salvarResult.success) {
        this.alertSrv.toast('Dados atualizados com sucesso!', 'bottom');
      }
    } catch (error) {
      console.log('Erro ao atualizar os dados, motivo: ' + error);
    }
  }

  async LoadData(): Promise<void> {
    try {
      let user = <UsuarioModel>JSON.parse(localStorage.getItem(ConfigHelper.storageKeys.user))
      let userResult = await this.usuarioSrv.getById(user._id);
      if (userResult.success) {
        this.usuarioLogado = <UsuarioModel>userResult.data;
        if (!this.usuarioLogado.foto)
          this.usuarioLogado.foto = ConfigHelper.photo;
      }
    } catch (error) {
      console.log('Problema ao carregar os dados do usuário');
    }
  }


}
