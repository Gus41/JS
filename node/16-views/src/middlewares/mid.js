Mid_Global = (req,res,next)=>{
    console.log("Passando no middleware Global")

    if( req.body.nome ){
        console.log("Formulario interceptado: " + req.body.nome)
    }
    next()
}

CheckCsurfError = (err,req,res,next)=>{
    if(err){
        return res.render("erro")
    }
    console.log("Middlware erro")
}

module.exports = {Mid_Global,CheckCsurfError}
