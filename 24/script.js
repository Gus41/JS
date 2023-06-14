const elementos = ["ELEMENTO1","ELEMENTO2","ELEMENTO3","ELEMENTO4","ELEMENTO5"]
const caixa = document.getElementById("caixa2")
const btn_add_antes = document.getElementById("btn_addA")
const btn_print = document.getElementById("btn_print")
const btn_remove = document.getElementById("btn_remove")
const btn_add_depois = document.getElementById("btn_addD")


const criarElemento = (nome)=>{
    const novo = document.createElement("div")
    novo.setAttribute("class","elemento")
    novo.innerHTML = nome;
    const comando = document.createElement("div")
    comando.setAttribute("class","comando")
    const rad = document.createElement("input")
    rad.setAttribute("name","rad")
    rad.setAttribute("type","radio")
    comando.appendChild(rad)
    novo.appendChild(comando)
    return novo;
}
elementos.map( (e)=>{
    const elemento = criarElemento(e)
    caixa.appendChild(elemento)
})
const selecionado = ()=>{
    const todosRadios = [...document.querySelectorAll("input[type=radio]")]
    const ret = todosRadios.filter( (e)=>{
        return e.checked
    })

    return ret[0]
}
btn_print.addEventListener("click",()=>{
    const elemento = selecionado();
    if( elemento == undefined ){
        alert("Selecione um elemento primeiro")
    }else{
        const saida = elemento.parentNode.parentNode.textContent;
        alert(saida)
    }

})
btn_remove.addEventListener("click",()=>{
    const elemento = selecionado();
    if( elemento == undefined ){
        alert("Selecione um elemento primeiro")
    }else{
        elemento.parentNode.parentNode.remove()
    }
})
btn_add_antes.addEventListener("click",()=>{
    const elemento = selecionado();
    if(elemento == undefined ){
        alert("Selecione um elemento primeiro")
    }else{
        const conteudo = document.getElementById("conteudo")
        if(conteudo.value < 2 ){
            alert("Digite o nome do elemento para inserir")
        }else{
            const anterior = elemento.parentNode.parentNode
            const novo = criarElemento(conteudo.value)
            caixa.insertBefore(novo,anterior)
        }
    }

})
btn_add_depois.addEventListener("click",()=>{
    const elemento = selecionado();
    if(elemento == undefined ){
        alert("Selecione um elemento primeiro")
    }else{
        const conteudo = document.getElementById("conteudo")
        if(conteudo.value < 2 ){
            alert("Digite o nome do elemento para inserir")
        }else{
            const atual = elemento.parentNode.parentNode
            const prox = atual.nextSibling
            const novo = criarElemento(conteudo.value)
            caixa.insertBefore(novo,prox)
        }
    }

})
