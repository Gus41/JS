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
const d1 = new Dispositivo("Telefone")
const d2 = new SmartPhone("AppelPen","Apple")

console.log(d2)
d2.ligar()

console.log(d2)