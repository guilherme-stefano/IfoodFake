import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdmProdutoPage } from './adm-produto';

@NgModule({
  declarations: [
    AdmProdutoPage,
  ],
  imports: [
    IonicPageModule.forChild(AdmProdutoPage),
  ],
})
export class AdmProdutoPageModule {}
