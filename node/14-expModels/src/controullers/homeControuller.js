exports.paginaInicial = (req,res,next)=>{
    res.render("index")
    return
}

exports.trataPost = (req,res,next)=>{

    res.send("Nova rota de post." + req.body.nome)
}