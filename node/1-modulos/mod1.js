const nome = "Luiz"
const Sobrenome ="Miranda"


const fala = ()=>{
    console.log(nome + " " + Sobrenome)
}
module.exports.nome = nome
module.exports.Sobrenome = Sobrenome
module.exports.fala = fala
//pode usar só exports.atributo - atributo 
this.teste = "teste"

class Pessoa{
    constructor(nome){
        this.nome = nome
    }
}
exports.Pessoa = Pessoa