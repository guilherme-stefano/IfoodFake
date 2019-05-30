'use strict'

function categoriaController() {

}

categoriaController.prototype.post = async (req, res) => { 
    res.status(201).send('funcionando...');
};

categoriaController.prototype.put = async (req, res) => { 

    res.status(202).send('funcionando...');
};

categoriaController.prototype.get = async (req, res) => { 
    res.status(200).send('funcionando...');
};

categoriaController.prototype.getById = async (req, res) => { 
    res.status(200).send('funcionando...');
};

categoriaController.prototype.delete = async (req, res) => { };

module.exports = categoriaController;