const express= require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const variables = require('../bin/configuration/variables');

//routers
const categoriaRouter= require('../bin/routes/categoria-router');
const produtoRouter= require('../bin/routes/produto-router');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//configurando a conexão com o banco de dados

mongoose.connect(variables.Database.connection);
//configurando rotas 
app.use('/api/categoria', categoriaRouter);
app.use('/api/produto', produtoRouter);

module.exports = app;