import GeraSenha from "./gerador"

const saida = document.getElementById("res")
const quantidade = document.getElementById("quantidade")
const numeros = document.getElementById("nums")
const maiusculas = document.getElementById("mais")
const minusculas = document.getElementById("min")
const simbolos = document.getElementById("simbs")
const btn = document.getElementById("btn")

export default ()=>{
    btn.addEventListener("click",()=>{
       saida.innerHTML = gera()
    })

    function gera(){
        const senha = GeraSenha(quantidade.value,maiusculas.checked,minusculas.checked,numeros.checked,simbolos.checked)
        return senha || "Nada Seleionado"
    }

}