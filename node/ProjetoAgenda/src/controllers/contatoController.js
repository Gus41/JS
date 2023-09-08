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
    console.log(req.params.id)
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
// func que irá editar o contato
exports.edit = async function(req,res){
    console.log("Contato já existente")
    try{
        console.log(req.params.id)
        if(!req.params.id){
            console.log("Sem id")
            return res.render("404")
        }
        const contato = new Contato(req.body)
        await contato.edit(req.params.id)
        if(contato.erros.length > 0){
            console.log(contato.erros)
            req.flash("errors",contato.erros)
            req.session.save( ()=>{
                res.redirect("back")
            })
            return
        }
    
        req.flash("succes","Contato editado com sucesso")
        req.session.save(()=>{
            res.redirect(`/contato/index/${contato.contato._id}`)
        })

    }catch(e){
        console.log(e)
        res.render("404")
    }
    
}