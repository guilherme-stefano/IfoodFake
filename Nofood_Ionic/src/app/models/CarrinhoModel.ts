import { CarrinhoItemModel } from "./CarrinhoItemModel";

export class CarrinhoModel{
    datahota: Date;
    valorTotal: number = 0.0;
    itens: Array<CarrinhoItemModel>;

    constructor() {
        this.itens = new Array<CarrinhoItemModel>();
    }
}