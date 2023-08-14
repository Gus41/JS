const HomeModel = require("../models/HomeModel")


exports.paginaInicial = (req,res,next)=>{
    // req.session.usuario = {nome: "Teste",logado: true}
    console.log(req.session.usuario)
    console.log(req.flash("info"))
    res.render("index",{
        titulo: `Titulo <span style="color:red;">provisorio</span>`,
        nums: [1,2,3,4,5,6,7,8,9,10]
    })
    return
}

exports.trataPost = (req,res,next)=>{

    res.send("Nova rota de post." + req.body.nome)
}
//HomeModel.find().then( (dados)=>{
//  console.log("Todos os dados na base de dados: ")
//    console.log(dados)
//})