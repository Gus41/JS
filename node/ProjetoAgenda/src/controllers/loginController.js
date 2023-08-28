const Login = require("../models/LoginModel")



exports.index = (req,res) =>{
    res.render("login");
}
exports.register = async (req,res)=>{
    try{
        const login = new Login(req.body)
        await login.register()

        if( login.erros.length > 0){
            
            req.flash("errors",login.erros);
            
            //salvando a sessão e redirecionando para a pagina de cadastro caso tenha algum erro
            req.session.save(function(){
                return res.redirect("back");
            })
            return
        }

        req.flash("succes","Usuario criado com sucesso");
            
        //salvando a sessão e redirecionando para a pagina de cadastro caso tenha algum erro
        req.session.save(function(){
            return res.redirect("back");
        })
        
    }catch(e){
        console.log(e)
        return res.render("404")
       
    }
    
}