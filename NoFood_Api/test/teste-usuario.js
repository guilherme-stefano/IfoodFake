const mongoose = require('mongoose');
const model = require('../models/usuario-model');

const chai = require('chai');
const chaiHttp =  require('chai-http');
const server =  require('../server');
const shold = cahi.shold();

chai.use(chaiHttp);

describre('Usuários', () => {
    describe( '/GET Lista os usuários da api', (done) => {
        chai.request(server)
        .get('/api/usuario', (error, response) => {
            response.body.shold.be.a('array');
            response.shold.have.status(200);
            done();
        });
    });
});