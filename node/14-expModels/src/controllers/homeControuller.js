const HomeModel = require("../models/HomeModel")

HomeModel.create({
    titulo: "Teste3",
    descricao: "Descrição"
}).then( (dados)=>{
    console.log("Efetuada a criação na base de dados: ")
    console.log(dados)
})

exports.paginaInicial = (req,res,next)=>{
    res.render("index")
    return
}

exports.trataPost = (req,res,next)=>{

    res.send("Nova rota de post." + req.body.nome)
}
HomeModel.find().then( (dados)=>{
    console.log("Todos os dados na base de dados: ")
    console.log(dados)
})