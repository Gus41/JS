const radioM = document.querySelector("#tipoMilitar")
const radioN = document.querySelector("#tipoNormal")











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