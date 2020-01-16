
//Importando bibliotecas
const express = require('express');

const cors = require('cors');

const Sequelize = require('sequelize');

const bodyParser = require('body-parser');

//Obtendo acesso ao express através do const app
const app = express();


//Acessando bodyParser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


//requerindo rotas
app.use('/', require('./src/routes'));

//Direcionando porta
app.listen(3001);



