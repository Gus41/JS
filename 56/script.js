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

    }
}
const controle1 = new Controle("LG")
controle1.aumentarVolume()
console.log(controle1)