const elementsTexts = ["Cafe","Açucat","Feijao","Arroz","Seila"]
const caixa = document.getElementById("caixaB")
const btn_print = document.getElementById("btn_print")
const btn_addA = document.getElementById("btn_addA")
const btn_addD = document.getElementById("btn_addD")

let i = 0;
const CriaElemento = (nome)=>{
    const novo = document.createElement("div")
    novo.setAttribute("class","elemento")
    novo.setAttribute("id","E"+i)
    i++;
    const comando = document.createElement("div")
    comando.setAttribute("class","comandos")
    const radio = document.createElement("input")
    radio.setAttribute("type","radio")
    radio.setAttribute("name","el_input")
    novo.innerHTML = nome;

    comando.appendChild(radio)
    novo.appendChild(comando)

    return novo

}

elementsTexts.map( (e)=>{
    const novo = CriaElemento(e);
    caixa.appendChild(novo)

})
const Selecao = ()=>{
    const TodosRadios = [...document.querySelectorAll("input[type=radio]")]
    const selecionado = TodosRadios.filter( (e)=>{
        return e.checked
    })
    return selecionado[0]
}
btn_print.addEventListener("click", (evt)=>{
    const selecionado = Selecao();
    if ( selecionado == undefined ){
        window.alert("Selecione um elemento primeiro")
    }else{
        alert(selecionado.parentNode.previousSibling.textContent)
    }
})
btn_remove.addEventListener("click",()=>{
    const selecionado = Selecao();
    if( selecionado == undefined ){
        window.alert("Selecione um elemento primeiro")
    }else{
        const el =selecionado.parentNode.parentNode;
        el.remove();
    }
    
})
btn_addA.addEventListener("click",()=>{


    const elemento = Selecao()
    if( elemento == undefined ){
        window.alert("Selecione um elemento primeiro")
    }else{
        const conteudo = document.getElementById("elementoid")
        const novo = CriaElemento(conteudo.value)
        const Parent = elemento.parentNode.parentNode
        caixa.insertBefore(novo,Parent)
    }
    

})
btn_addD.addEventListener("click", ()=>{
    const elemento = Selecao();
    if ( elemento == undefined ){
        alert("Selecione um elemento primeiro")
    }else{
        const conteudo = document.getElementById("elementoid")
        const novo = CriaElemento(conteudo.value)
        const Parent = selecionado.parentNode.parentNode.nextSibling
        caixa.insertBefore(novo,Parent)
    }
})
