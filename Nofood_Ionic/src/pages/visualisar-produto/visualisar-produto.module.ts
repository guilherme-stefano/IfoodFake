import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VisualisarProdutoPage } from './visualisar-produto';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    VisualisarProdutoPage,
  ],
  imports: [
    PipesModule,
    IonicPageModule.forChild(VisualisarProdutoPage),
  ],
})
export class VisualisarProdutoPageModule {}
