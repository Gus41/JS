exports.index = (req,res) =>{

    res.render("contato",{
        contato:{}
    })
}
const Contato = require("../models/ContatoModel")
exports.register = async (req,res)=>{
    try{
        
        const contato = new Contato(req.body)

        await contato.register()
        
        if(contato.erros.length > 0){
            console.log(contato.erros)
            req.flash("errors",contato.erros)
            req.session.save( ()=>{
                res.redirect("back")
            })
            return
        }
    
        req.flash("succes","Contato registrado com sucesso")
        req.session.save(()=>{
            res.redirect(`/contato/index/${contato.contato._id}`)
        })

    }catch(e){
        console.log(e)
        return res.render("404")
    }

}

exports.editIndex = async function(req,res){
    if(!req.params.id){
        return res.render("404")
    }
    const contato = await Contato.SearchID(req.params.id)

    if(!contato){
        //retornou null
        return res.render("404")
    }
    res.render("contato",{
        contato
    })
}