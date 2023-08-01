const rand =(min,max)=>{
    return Math.floor(Math.random() * ( max - min ) + min)
}
const GeraMaiuscula = ()=>{
    return String.fromCharCode(rand(65,91)) // gera um numero na tabela aschii
}
const GeraMinuscula = ()=>{
    return String.fromCharCode(rand(97,123))
}
const GeraNumero = ()=>{
    return String.fromCharCode(rand(48,58))
}
const simbolos = "!@#$%¨&*(),.^~:;}{}-_+="
const GeraSimbolo = ()=>{
    return simbolos[rand(0,simbolos.length)]
}
export default function GeraSenha(qntd,maiusculas,minusculas,numeros,simbolos){
    const SenhaArr = []
    qntd = Number(qntd)
    for ( let i = 0 ; i < qntd ; i ++ ){
        console.log("Dentro do for")
        maiusculas && SenhaArr.push(GeraMaiuscula())
        minusculas && SenhaArr.push(GeraMinuscula())
        numeros && SenhaArr.push(GeraNumero())
        simbolos && SenhaArr.push(GeraSimbolo())
    
    }
    const SenhaString = SenhaArr.join("")
    return SenhaString.slice(0,qntd)



}