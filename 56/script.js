class Controle{
    constructor(tv){
        this.tv = tv
        this.volume = 0
    }
    aumentarVolume(){
        this.volume += 2
    }
    diminuirVolume(){
        this.volume -= 2
    }
    static trocaPila(){ //metodo estatico == da classe
        console.log("Pilha trocada")
    }
}
const controle1 = new Controle("LG")
controle1.aumentarVolume()
console.log(controle1)
Controle.trocaPila()