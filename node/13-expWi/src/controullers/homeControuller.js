exports.paginaInicial = (req,res,next)=>{
    res.render("index")
    next()
}

exports.trataPost = (req,res,next)=>{
    res.send("Nova rota de post.")
}