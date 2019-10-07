export class ListaPedidosModel {
    dataPerdido: string;
    valorTotal: number;
    itens: string;

    static getTotalItens(itens: string): number{
        try{
            let _itens = JSON.parse(itens);
            return _itens.length;
        } catch(error){
            return 0;
        }
    }
}