const caixa = document.getElementById("caixa")
const btn = document.getElementById("btn")
var flag;
btn.addEventListener("click",()=>{
    const conteudo = document.getElementById("cont")
    if(conteudo.value.length < 3){
        window.alert("PRENCHA O CAMPO DE TEXTO PRIMEIRO")
    }else{
        flag = 0;
        const elementos = [...document.getElementsByClassName("elemento")]
        elementos.map((e)=>{
            if( e.innerHTML === conteudo.value ){
                window.alert("ELEMENTO JA ESTA NA LISTA")
                flag = 1;
            }
        })

        if( !flag ){
            const novo = document.createElement("div")
            novo.classList.add("elemento")
            novo.innerHTML = conteudo.value
            caixa.appendChild(novo)
        }
        

    }


})
