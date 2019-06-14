import { IonicModule } from 'ionic-angular';
import { NgModule } from '@angular/core';
import { QuantidadeComponent } from './quantidade/quantidade';
@NgModule({
	declarations: [QuantidadeComponent],
	imports: [IonicModule],
	exports: [QuantidadeComponent]
})
export class ComponentsModule {}
