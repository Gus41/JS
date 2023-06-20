
function Pessoa(nome,idade){
    this.nome = nome,
    this.idade = idade,
    this.getNome =()=>{
        return this.nome;
    },
    this.getIdade = ()=>{
        return this.idade;
    },
    this.setNome= (nome)=>{
        this.nome = nome;
    },
    this.setIdade = (idade)=>{
        this.idade = idade;
    },
    this.info = ()=>{
        alert(`Nome: ${this.nome}, idade : ${this.idade}`)
    }
}
let pessoas = []
const btn = document.querySelector("#btn")
const res = document.getElementById("res")

const addPessoa = ()=>{
    res.innerHTML = ""
    pessoas.map((p)=>{
        const div = document.createElement("div")
        div.setAttribute("class","pess")
        div.innerHTML = `Nome : ${p.getNome()}, Idade: ${p.getIdade()}`
        res.appendChild(div)
    })
}
btn.addEventListener("click",()=>{

    const nome = document.getElementById("nome")
    const idade = document.getElementById("idade")
    const p = new Pessoa(nome.value,idade.value)
    pessoas.push(p)
    nome.value =""
    idade.value = ""
    nome.focus()
    addPessoa();
})