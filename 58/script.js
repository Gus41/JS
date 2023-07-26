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
        user = campo.value
        let valid = true

        if( user.length > 12 || user.length < 3 ){
            this.createError(campo,"Usuario precisa ter entre 3 e 12 caracteres")
            valid = false
        }
        if( !user.match(/^[a-zA-Z0-9]+$/g) ){
            this.createError(campo,"Usuario precisa conter apenas letras e ou numeros")
        }
        return true
    }
    checkFields(){
        let valid = true
        for( let  errortext of this.formulario.querySelectorAll(".error-text" )){
            errortext.remove()
        }
        for(let field of this.formulario.querySelectorAll(".validar")){
            alert(field.name)
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
                alert("Ususario")
                if(!this.validaUsuario(field)){
                    valid = false
                }
            }   

        }
    }
    handleSubmit(event){
        event.preventDefault()
        const camposValidos = this.checkFields()
    }
    eventos(){
        this.formulario.addEventListener("submit",e=>{
            this.handleSubmit(e)
        })
    }
}
const valida = new ValidaForm()