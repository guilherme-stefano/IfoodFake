import { PipesModule } from './../../pipes/pipes.module';
import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CarrinhoPage } from './carrinho';

@NgModule({
  declarations: [
    CarrinhoPage,
  ],
  imports: [
    ComponentsModule,
    PipesModule,
    IonicPageModule.forChild(CarrinhoPage),
  ],
})
export class CarrinhoPageModule {}
