import validator from "validator"
import CreateError from "./CreateError"
//let CriaErro = CreateError
export default class ValidaContato{
    constructor(ContatoClass){
        this.form = document.querySelector(ContatoClass)
    }
    init(){
        this.events()
    }
    events(){
        if(!this.form){
            console.log("Falha em linkar formulário")
            return 
        }
        this.form.addEventListener("submit", e=>{
            e.preventDefault()
            this.valida(e)
        })
    }
    valida(e){
        const el = e.target // form
        const nome = el.querySelector('input[name="nome"]')
        const sobrenome = el.querySelector('input[name="sobrenome"]')
        const email = el.querySelector('input[name="email"]')
        const telefone = el.querySelector('input[name="telefone"]')
        
        let erro = false
        
        if(!validator.isEmail(email.value)){
            erro = true
            //CriaErro = new CreateError("email invalido",email)
            //email invalido
        }
        if( nome.value.length < 2 ){
            erro = true
            // nome invalido
            //CriaErro = new CreateError("nome invalido",nome)
        }
        if( sobrenome.value.length < 2 ){
            erro = true
            // sobrenome invalido
        }
        if(telefone.value.length < 8){
            erro = true
        }
        if(!erro){
            el.submit()
        }else{
            alert("Dados incorretos")
        }

    }
}