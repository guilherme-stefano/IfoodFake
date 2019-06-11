'use strict'

const mongoose = require('mongoose');
const schema = mongoose.Schema;

const produtoModel = new schema({
    nome: { trim: true, index: true, required: true, type: String},
    descricao:{ type:String},
    ativo:{type: Boolean, required: true, default:true},
    preco:{type: Number, required:true},
    foto:{ type: String, required:true},
    categoriaId:{type:schema.Types.ObjectId, ref:'Categoria'},
    dataCriacao:{ type:Date, default:Date.now}
}, {versionKey:false});

produtoModel.pre('save', next => {
    let agora = new Date();
    if(!this.dataCriacao){
        this.dataCriacao = agora;
    }
    next();
});

module.exports = mongoose.model('Produto', produtoModel);