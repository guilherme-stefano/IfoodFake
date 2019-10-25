const mongoose = require('mongoose');
const usuarioModel = require('../models/usuario-model');

const chai = require('chai');
const chaiHttp =  require('chai-http');
const server =  require('../server');
const shold = chai.should();
const md5 = require('md5');

chai.use(chaiHttp);

describe('Api Usuários', () => {

    let token ='';
    before((done) => {
        usuarioModel.remove({nome:'usuario mocha'}, () => {
            let usuario = new usuarioModel({
                nome: 'usuario mocha',
                email: 'usuariomocah@ifoodfake.com',
                senha: md5('123'),
                telefone: '(00) 0000-0000'
            });

            usuario.save().then(() => {
                chai
                .request(server)
                .post('/api/usuario/autenticar')
                .send({email: 'usuariomocah@ifoodfake.com', senha: '123' })
                .end((error, success) => {
                    console.log(success.body.token);
                    token = success.body.token;
                    done();
                })
            });
        });
    });
    describe('/GET', () => {
        it('Lista os usuários da api', (done) => {
            chai.request(server)
            .get('/api/usuario')
            .set('x-access-token', token)
            .end((error, response) => {
                response.body.should.be.a('array');
                response.should.have.status(200);
                done();
            });
        })
    });
});