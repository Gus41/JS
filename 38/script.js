const num = document.getElementById("num")
let resultado = false
let tempo = 3000

num.innerHTML = "Processando..."

setTimeout( ()=>{
    resultado = true
}, tempo ) // 3 segundos
if( resultado ){
    num.innerHTML = "Deu tudo certo"
    num.classList.remove("erro")
    num.classList.add("ok")
}else{
    num.innerHTML = "Deu tudo errado"
    num.classList.add("erro")
    num.classList.remove("ok")
}

