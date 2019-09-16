'use strict'

const mongoose = require('mongoose');
const schema = mongoose.Schema;

const pedidoModel = new schema({
    usuarioId:{type: schema.Types.ObjectId, ref:'Usuario'},
    valorTotal:{type: Number, required: true, default:0},
    itens:{type: String, required:true}, 
    dataPedido:{type: Date, default: Date.now}
});

pedidoModel.pre('save', next => {
    let agora = new Date();
    if(!this.dataCriacao){
        this.dataCriacao = agora;
    }
    next();
});

module.exports = mongoose.model('Pedido', pedidoModel);