module.exports = (req,res,next)=>{
    res.locals.variavelGlobal = "Valor padrão"
    console.log("Passando no middleware Global")


    
    if( req.body.nome ){
        console.log("Formulario interceptado: " + req.body.nome)
    }
    next()
}