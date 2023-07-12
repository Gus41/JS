
import { carros as c,array,GetHelloWorld } from "./elementos.js" // importando array

console.log("Rodando")

console.log(GetHelloWorld())
console.log(c)
console.log(array)

// importando todos elementos que foram exportados no arquivo em um unico import
import * as todos from './elementos.js'

console.log(todos.GetHelloWorld())
console.log(todos.array)
console.log(todos.default())