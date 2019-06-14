import { NgModule } from '@angular/core';
import { RealPipe } from './real/real';
import { OrderByPipe } from './order-by/order-by';
@NgModule({
	declarations: [RealPipe,
    OrderByPipe],
	imports: [],
	exports: [RealPipe,
    OrderByPipe]
})
export class PipesModule {}
