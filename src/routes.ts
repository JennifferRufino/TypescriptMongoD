import express from 'express';
import {index, findIndex, create, details, remover, update} from './controllers/userController';
import {show, findShow, createProduct, productDetails, removerProduct, updateProduct} from './controllers/produtoController';
const routes = express.Router();

//Rotas dos usuários
routes.get('/api/usuarios', index);
routes.get('/api/usuarios/:id', findIndex);
routes.get('/api/details/:id', details);
routes.post('/api/usuarios', create);
routes.delete('/api/usuarios/:id', remover);
routes.put('/api/usuarios', update);

//Rotas dos produtos
routes.get('/api/produtos', show);
routes.get('/api/produtos/:id', findShow);
routes.get('/api/details/:id', productDetails);
routes.post('/api/produtos', createProduct);
routes.delete('/api/produtos/:id', removerProduct);
routes.put('/api/produtos', updateProduct);

export {routes as TodoRouter};