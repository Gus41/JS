const express = require("express")
const route = express.Router()
const HomeController = require("./controullers/homeControuller")
const ContatoControler = require("./controullers/ContatoController")
//rotas da home
route.get("/",HomeController.paginaInicial)
route.post("/",HomeController.trataPost)
//rotas de contato

route.get("/contato",ContatoControler.Paginainicial)


//exportando todas as rotas
module.exports = route