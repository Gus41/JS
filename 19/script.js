const btn = document.getElementById("btn_add")
const caixa = document.getElementById("caixa")

btn.addEventListener("click",(evt)=>{
    const conteudo = document.getElementById("conteudo")
    if ( conteudo.value.length < 2 ){
        window.alert("Digite alguma coisa para adidionar")
    }else{
        const novo = document.createElement("div")
        novo.setAttribute("class","elemento")
        novo.innerHTML = conteudo.value
        caixa.appendChild(novo)
    }
})