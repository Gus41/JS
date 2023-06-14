const caixa = document.querySelector("#caixaElementos")
const elementos = ["CAFE","AÇUCAR","CANELA","CAFE","LEITE"]
const btn_ElSelecionado = document.getElementById("btn_sel")
const btn_c = [...document.querySelectorAll(".elemento")]
const btn_remove = document.getElementById("btn_remove")
const btn_add = document.getElementById("btn_add_antes")
const btn_add_dps = document.getElementById("btn_add_depois")
let indice = 0;

const criarElemento = (nome)=>{
    const novo = document.createElement("div")
    novo.setAttribute("id","c"+indice)
    indice++;
    novo.setAttribute("class","elemento c1")
    novo.innerHTML = nome;

    const comandos = document.createElement("div")
    comandos.setAttribute("class","comandos")

    const rb = document.createElement("input")
    rb.setAttribute("type","radio")
    rb.setAttribute("name","rb_elemento")


    comandos.appendChild(rb)
    novo.appendChild(comandos)

    return novo;
}

elementos.map( (el,i)=>{
    const novo = criarElemento(el)
    caixa.appendChild(novo)
})

const selecao = ()=>{
    const todosRadios =[...document.querySelectorAll("input[type=radio]")]
    let selecionado = todosRadios.filter( (ele)=>{
        return ele.checked;
    })
    return selecionado[0]
}
btn_ElSelecionado.addEventListener("click",(evt)=>{
    const selecionado = selecao();
    if( selecionado == undefined ){
        window.alert("Nenhum elemento selecionado")
    }else{
        const elemento = selecionado.parentNode.previousSibling.textContent
        alert("curso selecionado "+ elemento)
    }
})
btn_remove.addEventListener("click",()=>{
    const selecionado = selecao();
    if( selecionado == undefined ){
        alert("Nenhum elemento selecionado")
    }else{
        const elemento = selecionado.parentNode.parentNode
        elemento.remove();
    }
})
btn_add_antes.addEventListener("click",(evt)=>{
    const conteudo = document.getElementById("elementoid")
    if(conteudo.value != "" ){
        const elemento = selecao();
        if( elemento == undefined ){
            alert("Nenhum elemento selecioado")
        }else{
            const selecionado = elemento.parentNode.parentNode
            const novo = criarElemento(conteudo.value)
            caixa.insertBefore(novo,selecionado)
        }
    }else{
        alert("Digite o nome do curso")
    }
    
})
btn_add_dps.addEventListener("click",()=>{
    const conteudo = document.getElementById("elementoid")
    const elemento = selecao();
    if( elemento == undefined ){
        alert("Nenhum elemento selecioado")
    }else{
        const selecionado = elemento.parentNode.parentNode
        const novo = criarElemento(conteudo.value)
        caixa.insertBefore(novo,selecionado.nextSibling)
    }
})

