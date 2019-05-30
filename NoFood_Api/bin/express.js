const express= require('express');
const bodyParser = require('body-parser');

//routers
const categoriaRouter= require('../bin/routes/categoria-router');
const produtoRouter= require('../bin/routes/produto-router');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


//configurando rotas 
app.use('/api/categoria', categoriaRouter);
app.use('/api/produto', produtoRouter);

module.exports = app;