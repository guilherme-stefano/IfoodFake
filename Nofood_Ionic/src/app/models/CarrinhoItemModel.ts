import { ProdutoModel } from "./ProdutoModel";

export class CarrinhoItemModel {
    Produto: ProdutoModel;
    Quantidade: number = 1;
}