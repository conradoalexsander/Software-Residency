const express = require('express');

const cors = require('cors');

const mongoose = require('mongoose');

const app = express();

//Informar à aplicação sobre o formato de registro utilizado para permitir o envio de dados no formato JSON
app.use(express.json());

app.use(cors());

const requireDir = require('require-dir');
requireDir('./src/models/');

/*const Product = mongoose.model('Product');*/

mongoose.connect('mongodb://localhost:27017/nodeapi',{useUnifiedTopology: true,useNewUrlParser: true});

app.use('/api', require('./src/routes'));

app.listen(3001);