'use strict'

const mongoose = require('mongoose');
const schema = mongoose.Schema;

const usuarioModel = new schema({
    nome: { trim: true, index: true, required: true, type: String},
    email: { type: String, required: true },
    senha: {type: String, required: true},
    foto: {type: String},
    ativo:{type: Boolean, required: true, default:true},
    dataCriacao:{ type:Date, default:Date.now}
}, {versionKey:false});

usuarioModel.pre('save', next => {
    let agora = new Date();
    if(!this.dataCriacao){
        this.dataCriacao = agora;
    }
    next();
});

module.exports = mongoose.model('Usuario', usuarioModel);