'use strict'

const app = require('../NoFood_Api/bin/express');
const variables = require('../NoFood_Api/bin/configuration/variables');
app.listen(variables.Api.port,()=>{
    console.log(`Api inicializada com sucesso na porta ${variables.Api.port}`);
});