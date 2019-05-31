const jwt = require('jsonwebtoken');

module.exports = async (re, res, next) =>{
    let token = req.body.token || req.query.token || req.headers['x-access-token'];
    if(token) {

    } else {
        res.status(401).send({message: 'você precisa informar um token pra acessar esse recurso.'});
        return;
    }
}