class Pessoa{
    constructor(nome,sobrenome){
        this.nome = nome
        this.sobrenome = sobrenome
    }
    get nomeCompleto(){
        return this.nome + " " + this.sobrenome
    }
    set nomeCompleto(Valor){
        Valor = Valor.split(" ")
        this.nome = Valor.shift()
        this.sobrenome = Valor.join()

    }
    falar(){
        console.log(this.nome + " está falandoo")

    }
    comer(){
        console.log(this.nome + " está comendo")

    }
    beber(){
        console.log(this.nome + " está bebendo")
    }
}
const p1 = new Pessoa("Otavio","Alberto")

//---------------------------
const _cvelocidade = Symbol("velocidade") //gera um id aleatorio e UNICO
console.log(_cvelocidade)
class Carro{
    constructor(nome){
        this.nome = nome
        this[_cvelocidade] = 0
    }
    set velocidade(n){
        if( typeof(n) !== "number" ){
            console.log("Valor invalido")
            return
        }
        if( n > 100 || n < 0 ){
            console.log("Valor invalido")
            return
        }
        this[_cvelocidade] = n
    }
    acelerar(){
        if( this[_cvelocidade] < 100 ){
            this[_cvelocidade]++
        }
    }
    freiar(){
        if( this[_cvelocidade] > 0 ){
            this[_cvelocidade]--
        }
    }
    get velocidade(){
        return this[_cvelocidade]
    }
}
const fusca = new Carro("Fusca")
fusca.velocidade = 200
console.log(fusca)
