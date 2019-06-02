import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MinhaContaPage } from './minha-conta';

@NgModule({
  declarations: [
    MinhaContaPage,
  ],
  imports: [
    IonicPageModule.forChild(MinhaContaPage),
  ],
})
export class MinhaContaPageModule {}
