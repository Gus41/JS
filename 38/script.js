const num = document.getElementById("num")

let promise = new Promise((ok,rejected)=>{  //instanciando nova promessa
    let resultado = false
    let tempo = 2500
    setTimeout( ()=>{
        resultado = true
        if(resultado){
            ok("Deu tudo certo")
        }else{
            rejected("Deu tudo errado")
        }
    }, tempo )

})

promise.then((retorno)=>{
    num.innerHTML = retorno
    num.classList.remove("erro")
    num.classList.add("ok")
})
promise.catch((retorno)=>{
    num.innerHTML = retorno;
    num.classList.add("erro")
    num.classList.remove("ok")
})

num.innerHTML = "Processando..."

