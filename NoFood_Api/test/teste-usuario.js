const mongoose = require('mongoose');
const usuarioModel = require('../models/usuario-model');

const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');
const should = chai.should();
const md5 = require('md5');

chai.use(chaiHttp);

describe('Api Usuários', () => {

    let token = '';
    let _idUsuarioRegistrado = '';

    before((done) => {
        usuarioModel.remove({ nome: /.*usuario mocha.*/i }, () => {

            let usuario = new usuarioModel({
                nome: 'usuario mocha',
                email: 'usuariomocha@nofood.com',
                senha: md5('123'),
                telefone: '(00) 0000-0000'
            });

            usuario.save().then(() => {

                chai
                    .request(server)
                    .post('/api/usuario/autenticar')
                    .send({ email: 'usuariomocha@nofood.com', senha: '123' })
                    .end((error, response) => {
                        token = response.body.token;
                        done();
                    });

            });

        });

    });

    describe('/POST', () => {
        it('Registra novo usuário', (done) => {
            chai
                .request(server)
                .post('/api/usuario/register')
                .send({
                    nome: 'usuario mocha',
                    email: 'usuariomocha1@nofood.com',
                    senha: '123',
                    senhaConfirmacao: '123',
                    telefone: '(00) 0000-0000'
                })
                .end((err, res) => {
                    _idUsuarioRegistrado = res.body._id;
                    res.should.have.status(201);
                    res.body.should.be.a('object');
                    res.body.should.have.property('email').eql('usuariomocha1@nofood.com');
                    done();
                });
        });
        it('Autentica o novo usuário cadastrado', (done) => {
            chai
                .request(server)
                .post('/api/usuario/autenticar')
                .send({ email: 'usuariomocha1@nofood.com', senha: '123' })
                .end((error, res) => {
                    res.should.have.status(200);
                    res.body.should.have.property('token');
                    done();
                });
        })
    });
    describe('/GET', () => {
        it('Lista os usuários da api', (done) => {
            chai
                .request(server)
                .get('/api/usuario')
                .set('x-access-token', token)
                .end((error, response) => {
                    response.body.should.be.a('array');
                    response.should.have.status(200);
                    done();
                });
        });

        it('Verifica os dados do usuário já cadastrado', (done) => {
            chai
                .request(server)
                .get(`/api/usuario/${_idUsuarioRegistrado}`)
                .set('x-access-token', token)
                .end((err, res) => {
                    res.body.should.be.a('object');
                    res.should.have.status(200);
                    res.body.should.have.property('email').eql('usuariomocha1@nofood.com');
                    res.body.should.have.property('nome').eql('usuario mocha');
                    done();
                });

        });

    });

    describe('/PUT', () => {
        it('Alteração de usuário cadastrado', (done) => {
            chai
                .request(server)
                .put(`/api/usuario/${_idUsuarioRegistrado}`)
                .set('x-access-token', token)
                .send({
                    nome: 'usuario mocha | ALTERADO',
                    email: 'usuariomocha1@nofood.com'
                })
                .end((err, res) => {
                    _idUsuarioRegistrado = res.body._id;
                    res.should.have.status(202);
                    res.body.should.be.a('object');
                    res.body.should.have.property('nome').eql('usuario mocha | ALTERADO');
                    done();
                });
        });
    });

    describe('/DELETE', () => {
        it('Deleta usuário cadastrado', (done) => {
            chai
                .request(server)
                .del(`/api/usuario/${_idUsuarioRegistrado}`)
                .set('x-access-token', token)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('message').eql('Registro excluído com sucesso!');
                    done();
                });
        })
    })


});