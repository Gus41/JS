export default class CreateError{
    constructor(erro_text,input){
        if(typeof erro_text != "string"){
            return
        }
        this.erro_text = erro_text
        this.element = input
        this.create()

    }
    create(){
        const row = document.createElement("div")
        const col = document.createElement("div")
        const alert = document.createElement("div")
        row.classList.add("row")
        col.classList.add("col my-3")
        alert.classList.add("alert alert-danger")
        alert.innerText = this.erro_text
        col.appendChild(alert)
        row.appendChild(col)
        this.insert(row)
    }
    insert(element){
        insertAfter(element, this.element);
    }
}