const { async } = require("regenerator-runtime");
const Login = require("../models/LoginModel")



exports.index = (req,res) =>{
    if(req.session.user){
        return res.render("login-logado")
    }
    return res.render("login");
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
exports.login = async (req,res)=>{
    try{
        const login = new Login(req.body)
        await login.login()

        if( login.erros.length > 0){
            
            req.flash("errors",login.erros);
            
            //salvando a sessão e redirecionando para a pagina de cadastro caso tenha algum erro
            req.session.save(function(){
                return res.redirect("back");
            })
            return
        }

        req.flash("succes","Login efetuado com sucesso");
        //criar sessao do usuario
        req.session.user = login.user

        //salvando a sessão e redirecionando para a pagina de cadastro caso tenha algum erro
        req.session.save(function(){
            return res.redirect("back");
        })
        
    }catch(e){
        console.log(e)
        return res.render("404")
       
    }
    
}

exports.logout = function(req,res){
    req.session.destroy();
    res.redirect("/")
}