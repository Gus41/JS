const radioM = document.querySelector("#tipoMilitar")
const radioN = document.querySelector("#tipoNormal")
const blind = document.querySelector("#Blindagem")
const municao = document.querySelector("#amo")
const caixa = document.querySelector("#carros")
const btn = document.getElementById("btn")
const nomecarro = document.getElementById("nome")
const portas = document.getElementById("portas")




radioM.addEventListener("click",()=>{
    blind.removeAttribute("disabled")
    municao.removeAttribute("disabled")
    
})
radioN.addEventListener("click",()=>{
    blind.value = 0
    municao.value = 0
    blind.setAttribute("disabled","disabled")
    municao.setAttribute("disabled","disabled")
})

let carros =[]

const remover = (quem)=>{
    carros = carros.filter( (el)=>{
        return el.nome!=quem;
    })
}
const gerenciarExebicao = ()=>{
    caixa.innerHTML = ""
    carros.map((e)=>{
        const div = document.createElement("div")
        div.setAttribute("class","carro")
        div.setAttribute("data-nome",e.nome)
        const btn2 = document.createElement("button")
        btn2.addEventListener("click",(evt)=>{
            const quem = evt.target.parentNode.dataset.nome
            remover(quem)
            gerenciarExebicao();

        })
        div.innerHTML += "Nome: " + e.nome
        div.innerHTML += ", Portas: " +e.portas
        div.innerHTML += ", Blindagem: " +e.blindagem
        div.innerHTML += ", Cor : " + e.cor
        btn2.innerHTML = "Remover"
        div.append(btn2)
        caixa.appendChild(div)
    })
}
btn.addEventListener("click",()=>{
    if(radioN.checked){
        const carro = new Carro(nomecarro.value,portas.value)
        carros.push(carro);
    }else{
        const carro = new Militar(nome.value,portas.value,blind.value,municao.value)
        carros.push(carro)
    }
    gerenciarExebicao();
    nome.value= ""
    portas.value = 0
    blind.value = 0
    municao.value = 0
})

carros.filter( (e)=>{

})

class Carro{
    constructor(nome,portas){
        this.nome = nome;
        this.portas = portas
        this.ligado = false
        this.vel = 0
        this.cor = undefined
    }
    ligar = function(){
        this.ligado = true
    }
    desligar = function(){
        this.ligado = false
    }
    setCor = function(cor){
        this.cor = cor
    }
}
class Militar extends Carro{
    constructor(nome,portas,blindagem,municao){
        super(nome,portas)
        this.blindagem = blindagem;
        this.municao = municao
        this.setCor("Verde")
    }
    atirar = function(){
        if(this.municao > 0){
            this.municao--;
        }
    }
}