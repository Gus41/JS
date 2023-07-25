class Dispositivo{
    constructor(nome){
        this.nome = nome
        this.ligado = false
    }
    ligar(){
        if( this.ligado ){
            console.log( this.nome + " ja esta ligado")
            return
        }
        this.ligado = true
    }
    desligar(){
        if( !this.ligado ){
            console.log( this.nome + " ja esta desligado")
            return
        }
        this.ligado = false
    }
}

class SmartPhone extends Dispositivo{
    constructor(nome,modelo){
        super(nome)
        this.modelo = modelo
    }
}
class Tablet extends SmartPhone{
    constructor(nome,modelo,cor){
        super(nome,modelo)
        this.cor = cor
    }
}
const d1 = new Dispositivo("Telefone")
const d2 = new SmartPhone("AppelPen","Apple")
const d3 = new Tablet("PeraPod","Apple","Preto")

console.log(d2)
d2.ligar()
d3.ligar()
console.log(d2)
console.log(d3)