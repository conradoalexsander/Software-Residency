const express = require('express');

const routes = express.Router();

const ProductController = require('./controllers/ProductController');

routes.get('/products', ProductController.index); 

//Cria a rota get para buscar um único item por ID
routes.get('/products/:id', ProductController.show);

routes.put('/products/:id', ProductController.update);

routes.post ('/products', ProductController.store);

routes.delete('/products/:id', ProductController.destroy);

module.exports = routes;