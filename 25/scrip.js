const elementos = [1,2,3,4,5,6,7]
const array = document.querySelector("#arr")
const res = document.querySelector("#res")
const btn = document.getElementById("btn_pesq")

array.innerHTML = "Array: [" +elementos+"]"

btn.addEventListener("click",()=>{
    const conteudo = document.getElementById("pesq")
    if( conteudo.value.length < 1 ){
        window.alert("Preencha o campo primeiro")
    }else{
        elementos.find( (e,i)=>{
            if( e == conteudo.value ){
                res.innerHTML = "Resultado: Numero "+e+" Encontrado, na posicao: " + i
                return e;
            }
        })
    }
})
