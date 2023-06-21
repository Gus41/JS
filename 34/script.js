class Carro{
    constructor(nome,portas){
        this.nome = nome
        this.portas = portas
        this.ligado = false
        this.velocidade = 0
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
const caixa = document.getElementById("res")
class Militar extends Carro{
    constructor(nome,portas){
        super(nome,portas)
    }
}
const c2 = new Militar("Militar",6)
const c1 = new Carro("normal",2)
c2.setCor("Verde")
caixa.innerHTML = c2.nome + " " + c2.portas + " " + c2.cor