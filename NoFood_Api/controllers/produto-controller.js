'use strict'

const repository = require('../repositories/produto-repository');
const ctrlBase = require('../bin/base/controller-base');
const validation = require('../bin/helpers/validation');
const _repo = new repository();

function produtoController() {

}

produtoController.prototype.post = async (req, res) => {
    let _validationContract = new validation();
    _validationContract.isRequired(req.body.nome, 'O nome do produto é obrigatorio');
    _validationContract.isRequired(req.body.descricao, 'A descrição do produto é obrigatoria');
    _validationContract.isRequired(req.body.foto, 'A foto do produto é obrigatoria');
    _validationContract.isRequired(req.body.preco, 'O preço do produto é obrigatorio');
    _validationContract.isRequired(req.body.categoriaId, 'Informe a categoria que o produto ');

    if (req.body.preco)
        _validationContract.isTrue(req.body.preco == 0, 'O preço do produto deve ser maior que Zero.');

    ctrlBase.post(_repo, _validationContract, req, res);
};

produtoController.prototype.put = async (req, res) => {
    let _validationContract = new validation();

    _validationContract.isRequired(req.body.nome, 'O nome do produto é obrigatorio');
    _validationContract.isRequired(req.body.descricao, 'A descrição do produto é obrigatoria');
    _validationContract.isRequired(req.body.foto, 'A foto do produto é obrigatoria');
    _validationContract.isRequired(req.body.preco, 'O preço do produto é obrigatorio');
    _validationContract.isRequired(req.body.categoriaId, 'Informe a categoria que o produto ');

    if (req.body.preco)
        _validationContract.isTrue(req.body.preco == 0, 'O preço do produto deve ser maior que Zero.');

    ctrlBase.put(_repo, _validationContract, req, res);
};

produtoController.prototype.get = async (req, res) => {
    ctrlBase.get(_repo, req, res);
};

produtoController.prototype.getById = async (req, res) => {
    ctrlBase.getById(_repo, req, res);
};

produtoController.prototype.delete = async (req, res) => {
    ctrlBase.delete(_repo, req, res);
};

module.exports = produtoController;
