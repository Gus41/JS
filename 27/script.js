const elementos= [1,2,3,4,5,6]
const btn_in = document.querySelector("#in")
const caixa = document.getElementById("ele")
const btn_fim = document.querySelector("#fim")

const atualiza = ()=>{
    caixa.innerHTML = elementos
}

atualiza();

btn_in.addEventListener("click",()=>{

    const conteudo = document.getElementById("cont")
    if(conteudo.value.length < 1 ){
        window.alert("Digite um valor antes")
    }else{
        elementos.push(conteudo.value)
        atualiza();
    }
})

btn_fim.addEventListener("click",()=>{
    const conteudo = document.getElementById("cont")
    if(conteudo.value.length < 1 ){
        window.alert("Digite um valor antes")
    }else{
        elementos.unshift(conteudo.value)
        atualiza();
    }
})