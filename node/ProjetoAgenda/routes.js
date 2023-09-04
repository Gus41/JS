const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const loginController = require('./src/controllers/loginController.js');
const contatoController = require('./src/controllers/contatoController.js');

const { loginRequired } = require("./src/middlewares/middleware")

// Rotas da home
route.get('/', homeController.paginaInicial);

// Rotas de login
route.get("/login/index",loginController.index)
route.post("/login/register",loginController.register)
route.post("/login/logar",loginController.login)
route.get("/login/logout",loginController.logout)

//rotas de contato
route.get("/contato/index",loginRequired,contatoController.index)
route.post("/contato/register",contatoController.register)
route.get("/contato/index/:id",contatoController.editIndex)
module.exports = route;
