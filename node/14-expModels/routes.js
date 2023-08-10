const express = require("express")
const route = express.Router()
const HomeController = require("./src/controullers/homeControuller")
const ContatoControler = require("./src/controullers/ContatoController")


//rotas da home
route.get("/",HomeController.paginaInicial)
route.post("/",HomeController.trataPost)
//rotas de contato

route.get("/contato",ContatoControler.Paginainicial)


//exportando todas as rotas
module.exports = route