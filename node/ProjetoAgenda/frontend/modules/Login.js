import validator from "validator"

export default class Login{
    constructor(formClass){
        this.form = document.querySelector(formClass)
        
    }
    init(){
        this.events()
    }
    events(){
        if(!this.form){
            return
            
        }
        this.form.addEventListener("submit", e=>{
            e.preventDefault()
            this.valida(e)
        })
    }
    valida(e){
        const el = e.target // form
        const emailinput = el.querySelector('input[name="email"]')
        const senhainput = el.querySelector('input[name="password"]')
        
        let erro = false

        if(!validator.isEmail(emailinput.value)){
            alert("Email invalido")
            erro = true
        }

        if(senhainput.value.length < 3){
            alert("Senha invalida")
            erro = true
        }

        if(!erro){
            el.submit()
        }
    }

}