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