module.exports = class Dog{
    constructor(nome){
        this.nome = nome
    }
    woof(){
        console.log(this.nome + " está fazendo auau")
    }
}