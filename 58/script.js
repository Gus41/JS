class ValidaForm{
    constructor(){
        this.formulario = document.querySelector(".formulario")
        this.eventos()
    }
    createError(campo,msg){
        const div = document.createElement("div")
        div.innerHTML = msg
        div.classList.add("error-text")
        campo.insertAdjacentElement("afterend",div) // inserindo div imediatamente depois do campo
    }
    cpfValido(campo){
        const cpf = new validaCpf(campo.value)
        if ( !cpf.valida() ){
            this.createError(campo,"Cpf Invalido")
            return false
        }
        return true
    }
    validaUsuario(campo){
        const user = campo.value
        let valid = true
        if( user.length > 12 || user.length < 3 ){
            this.createError(campo,"Usuario precisa ter entre 3 e 12 caracteres")
            valid = false
        }else if( !user.match(/^[a-zA-Z0-9]+$/g) ){
            valid = false
            this.createError(campo,"Usuario precisa conter apenas letras e ou numeros")
        }
        return valid
    }
    checkFields(){
        let valid = true
        for( let  errortext of this.formulario.querySelectorAll(".error-text" )){
            errortext.remove()
        }
        for(let field of this.formulario.querySelectorAll(".validar")){
            if(!field.value){ // campo vazio
                this.createError(field,"Campo "+ field.name + " nao pode ficar em branco")
                valid = false
            }
            if(field.name == "Cpf"){
               
                if(!this.cpfValido(field)){
                    valid = false
                }
            }

            if ( field.name === "Usuario" ){
                if(!this.validaUsuario(field)){
                    valid = false
                }
            }         
        }
        return valid
    }
    senhasValidas(){
        let valid = true

        const senha = this.formulario.querySelector("#Senha")
        const repSenha = this.formulario.querySelector("#RepetirSenha")

        if(senha.value.length < 6 || senha.value.length > 12){
            valid = false
            this.createError(senha,"Senha precisa ter entre 6 e 12 caracteres")
        }

        if(senha.value !== repSenha.value){
            valid = false
            this.createError(repSenha,"Senhas nao coincidem")
        }

        return valid
    }
    handleSubmit(event){
        event.preventDefault()
        const camposValidos = this.checkFields()
        const senhasV = this.senhasValidas()

        if( camposValidos && senhasV ){
            alert("Formulario enviado,safada")
            //this.formulario.submit()
        }
    }
    eventos(){
        this.formulario.addEventListener("submit",e=>{
            this.handleSubmit(e)
        })
    }
}
const valida = new ValidaForm()