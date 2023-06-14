const caixa = document.getElementById("caixa")
const btn_insere = document.getElementById("btn_insere")
const btn_remove = document.getElementById("btn_remove")
const elementos = [...document.getElementsByClassName("elemento")]
flag = 0
btn_insere.addEventListener("click", ()=>{
    const conteudo = document.getElementById("texto")
    if ( conteudo.value.length < 1 ){
        window.alert("INSIRA UM TEXTO ANTES DE INSERIR ALGUM ELEMENTO")
    }else{
        elementos.map( (e)=>{
            console.log(e)
            if( e.innerHTML == conteudo.value ){
                flag = 1;
            }
        })
        if( !flag ){
            const novo = document.createElement("div")
            novo.classList.add("elemento")
            novo.innerHTML = conteudo.value
            caixa.appendChild(novo)
            elementos.push(novo)
            novo.addEventListener("click", (e)=>{
                novo.classList.toggle("selecionado")
            })
        }else{
            window.alert("JA EXISTE UM ELEMENTO NA LISTA COM ESSE CONTEUDO")
            flag = 0
        }
    }
})

btn_remove.addEventListener("click", ()=>{
    const selecionados = [...document.getElementsByClassName("selecionado")]
    selecionados.map( (s)=>{
        elementos.map( (e)=>{
            if(e.innerHTML == s.innerHTML){
                elementos.splice(e)
            }
        })
        caixa.removeChild(s)
    })
})