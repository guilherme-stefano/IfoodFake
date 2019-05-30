'use strict'

function produtoController() {

}

produtoController.prototype.post = async (req, res) => { 
    res.status(201).send('funcionando...');
};

produtoController.prototype.put = async (req, res) => { 

    res.status(202).send('funcionando...');
};

produtoController.prototype.get = async (req, res) => { 
    res.status(200).send('funcionando Produto...');
};

produtoController.prototype.getById = async (req, res) => { 
    res.status(200).send('funcionando...');
};

produtoController.prototype.delete = async (req, res) => { };

module.exports = produtoController;