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