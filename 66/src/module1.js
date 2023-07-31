const nome = "Luiz"
const sobrenome = "Miranda"
const idade = 21

function soma(x,y){
    return x+y
}

export { nome,sobrenome,idade as valor,soma }
//variavel idade sera renomeada como valor no import

export function saida(){
    console.log("Função exportada")
}
export class Pessoa{
    constructor(nome,sobr){
        this.nome = nome 
        this.sobrenome = sobr
    }

}

//--------------DEFAULT------------
export default function FuncaoDefault(){
    console.log("Função Default")
}

//export {nome as default,sobrenome } exportando nome como default e exportando outros atributos juntos 
