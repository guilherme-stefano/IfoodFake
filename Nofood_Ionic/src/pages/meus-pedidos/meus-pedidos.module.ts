import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MeusPedidosPage } from './meus-pedidos';

@NgModule({
  declarations: [
    MeusPedidosPage,
  ],
  imports: [
    IonicPageModule.forChild(MeusPedidosPage),
  ],
})
export class MeusPedidosPageModule {}
