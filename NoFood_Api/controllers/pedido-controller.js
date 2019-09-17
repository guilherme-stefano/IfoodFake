'use strict'

const repository = require('../repositories/pedido-repository');
const ctrlBase = require('../bin/base/controller-base');
const validation = require('../bin/helpers/validation');
const _repo = new repository();

function pedidoController() {

}

pedidoController.prototype.post = async (req, res) => {

    let _validationContract = new validation();
    _validationContract.isRequired(req.body.valorTotal, 'O valor Total é obrigatório');
    _validationContract.isRequired(req.body.itens, 'Informe os itens do seu pedido');
    req.body.usuarioId = req.usuarioLogado._id;
    ctrlBase.post(_repo, _validationContract, req, res);
};

pedidoController.prototype.get = async (req, res) => {
   let result = await _repo.getAll(req.usuarioLogado._id);
   res.status(200).send(result);
};

pedidoController.prototype.getById = async (req, res) => {
    ctrlBase.getById(_repo, req, res);
};

module.exports = pedidoController;