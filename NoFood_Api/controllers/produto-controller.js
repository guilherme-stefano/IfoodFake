'use strict'

require('../models/produto-model');
const repository = require('../repositories/produto-repository');

function produtoController() {

}

produtoController.prototype.post = async (req, res) => {
    let resultado = await new repository().create(req.body);
    res.status(201).send(resultado);
};

produtoController.prototype.put = async (req, res) => {
    let resultado = await new repository().update(req.params.id, req.body);
    res.status(202).send(resultado);
};

produtoController.prototype.get = async (req, res) => {
    let lista = await new repository().getAll();
    res.status(200).send(lista);
};

produtoController.prototype.getById = async (req, res) => {
    let produto = await new repository().getById(req.params.id);
    res.status(200).send(produto);
};

produtoController.prototype.delete = async (req, res) => {
    let deletado = await new repository().delete(req.params.id);
    res.status(204).send(deletado);
};

module.exports = produtoController;
