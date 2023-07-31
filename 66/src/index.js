console.log("teste")
import { nome as nome2, sobrenome, idade, soma, valor } from "./module1"
console.log(nome2)
const nome = "Valor novo"
// nome as nome2 ( Nomeando variavel para nome2 )
console.log(nome)
console.log(valor)
console.log(sobrenome)
console.log(soma(5,5))
// importando funções e classes diretamente
import { Pessoa, saida } from "./module1"
const Pess = new Pessoa(nome2,sobrenome)
console.log(Pess)
saida()
// import * as Modulo from "./modulue1"
//Retorna um objeto com todos os atributos exportados

import def from "./module1" // importando default do modulo
def()