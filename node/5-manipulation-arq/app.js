const pessoas = [{nome:"Joao"},{nome:"Maria"},{nome:"Eduardo"}]
const fs = require("fs").promises
const path = require("path")
const json = JSON.stringify(pessoas,"",2)
const caminho_arq = path.resolve(__dirname,"teste.json");

const escreve = require("./modules/escreve")
escreve(caminho_arq,json)
const ler = require("./modules/le")


function renderizaDados(dados){
    dados = JSON.parse(dados) // destransformando de jsonString
    console.log(dados)
}
async function leitura(caminho){
    const cont = await ler(caminho)
    renderizaDados(cont)
}

const dados = leitura(caminho_arq)
