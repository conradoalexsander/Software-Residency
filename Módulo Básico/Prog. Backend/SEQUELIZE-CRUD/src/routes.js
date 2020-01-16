const express = require('express');

const routes = express.Router();

const UserController = require('./controllers/UserController');

const PostController = require('./controllers/PostController');

const PostUserController = require('./controllers/PostController');



//====================================================
//                  ROTAS DO USER
//====================================================
routes.get('/list/users', UserController.index);

routes.get('/list/users/:id', UserController.show);

routes.post('/register/user', UserController.store);

routes.put('/update/user/:id', UserController.update);

routes.delete('/delete/user/:id', UserController.delete);

//====================================================
//                  ROTAS DO POST
//====================================================

routes.get('/list/posts', PostController.index);

routes.get('/list/posts/:id', PostController.show);

routes.post('/register/post/:userId', PostController.store);

routes.put('/update/post/:id', PostController.update);

routes.delete('/delete/post/:id', PostController.delete);

//====================================================
//                 ROTA POSTUSER
//====================================================
routes.get('/list/postUsers/:userId', PostController.indexPosts);

//====================================================
//                 EXPORTANDO ROTAS
//====================================================
module.exports = routes;


