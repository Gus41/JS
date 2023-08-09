const express = require("express")
const route = express.Router()
const HomeController = require("./src/controullers/homeControuller")
const ContatoControler = require("./src/controullers/ContatoController")
function middleware(req,resp,next){
    console.log("Passando pelo middlware")
    next()
}

//rotas da home
route.get("/",middleware,HomeController.paginaInicial,()=>{
    console.log("Ultimo middlware")
})
route.post("/",HomeController.trataPost)
//rotas de contato

route.get("/contato",ContatoControler.Paginainicial)


//exportando todas as rotas
module.exports = route