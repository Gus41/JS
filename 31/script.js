class Pessoa{
    constructor(nome,idade){
        this.nome = nome;
        this.idade = idade;
    
    }
    getNome(){
        return this.nome;
    }
    getIdade(){
        return this.idade;
    }
    setNome(nome){
        this.nome = nome;
    }
    setIdade(idade){
        this.idade = idade;
    }
    info(){
        alert(`Nome: ${this.nome}, idade : ${this.idade}`)
    }
}
let pessoas = []
const btn = document.querySelector("#btn")
const res = document.getElementById("#res")
btn.addEventListener("click",()=>{

    const nome = document.getElementById("nome")
    const idade = document.getElementById("idade")
    const p = new Pessoa(nome.value,idade.value)
    pessoas.push(p)
    nome.value =""
    idade.value = ""
    nome.focus()
})