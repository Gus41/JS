module.exports = (req,res,next)=>{
    console.log("Passando no middleware Global")
    if( req.body.nome ){
        console.log("Formulario interceptado: " + req.body.nome)
    }
    next()
}