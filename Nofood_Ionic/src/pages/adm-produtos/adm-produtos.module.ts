import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdmProdutosPage } from './adm-produtos';

@NgModule({
  declarations: [
    AdmProdutosPage,
  ],
  imports: [
    IonicPageModule.forChild(AdmProdutosPage),
  ],
})
export class AdmProdutosPageModule {}
