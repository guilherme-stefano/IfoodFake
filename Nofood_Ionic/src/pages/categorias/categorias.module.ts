import { PipesModule } from './../../pipes/pipes.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CategoriasPage } from './categorias';

@NgModule({
  declarations: [
    CategoriasPage,
  ],
  imports: [
    PipesModule,
    IonicPageModule.forChild(CategoriasPage),
  ],
})
export class CategoriasPageModule {}
