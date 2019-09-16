const express= require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const variables = require('../bin/configuration/variables');

//routers
const categoriaRouter= require('../routes/categoria-router');
const produtoRouter= require('../routes/produto-router');
const usuarioRouter= require('../routes/usuario-router');
const pedidoRouter= require('../routes/pedido-router');

const app = express();

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

//configurando a conexão com o banco de dados

mongoose.connect(variables.Database.connection, {useNewUrlParser: true});
//configurando rotas 
app.use('/api/categoria', categoriaRouter);
app.use('/api/produto', produtoRouter);
app.use('/api/usuario', usuarioRouter);
app.use('/api/pedido', pedidoRouter);

module.exports = app;