const express= require('express');
const app = express();
const bodyParser = require('body-parser')


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

let pessoas = [];

app.get('/', (req, res) => {
    res.status(200).send(pessoas);
});

app.post('/', (req, res) => {
    pessoas.push(req.body);
    res.status(201).send(req.body);
});

app.put('/:id', (req, res)=>{
    let pessoaEncontrada = pessoas.filter(pes => {return pes.id == req.params.id});
    pessoaEncontrada = req.body;
    console.log(pessoaEncontrada);
    res.status(202).send(pessoaEncontrada);
});

app.delete('/:id', (req, res) =>{
    for(let index = 0; index < Array.length; index++){
        const pessoa = pessoas[index];
        if(pessoa.id == req.params.id){
            pessoas.splice(index,1);
        }
    }
    res.status(204).send();
});

app.listen(3000, () => {
    console.log('Servidor Api NoFood iniciada na porta 3000.');
});