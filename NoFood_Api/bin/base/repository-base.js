'use strict'

const mongoose = require('mongoose');

class repositoryBase{

    constructor(model){
        this._model = mongoose.model(model);
    }

    async create(data){
        let modelo = new this._model(data);
        let resultado = await modelo.save();

        return resultado;
    }

    async update(id, data){
        await this._model.findByIdAndUpdate(id, {$set: data});
        let resultado = await this._model.findById(id);

        return resultado;
    }

    async getAll(){
        let resultado  = await this._model.find();
        return resultado;
    }

    async getById(id){
        let resultado  = await this._model.findById(id);
        return resultado;
    }

    async delete(id){
        let resultado = await this._model.findByIdAndDelete(id);
        return resultado;
    }
}

module.exports = repositoryBase;