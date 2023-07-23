const btn_add = document.getElementById("btn_add")
const caixa = document.getElementById("container")
function CriaElemento(nome,preco){
    const div = document.createElement("div")
    const p = document.createElement("p")
    p.innerText = `${nome} ${preco}R$`
    const btn_remover = document.createElement("button")
    div.appendChild(p)
    btn_remover.innerText = "Apagar"
    div.appendChild(btn_remover)
    btn_remover.addEventListener("click",(e)=>{
        const elemento_removido = e.target.parentNode
        elemento_removido.remove()
    })
    div.classList.add("produto")

    return div
}

btn_add.addEventListener("click",()=>{
    const nome_p = document.getElementById("nome")
    const preco_p = document.getElementById("preco")
    if(nome_p.value.length < 1 || preco_p.value.length < 1){
        window.alert("Preencha todos os campos antes de adicionar um elemento")
    }else{
        const pin = document.getElementById("pin")
        if(pin){
            pin.remove()
        }
        const elemento = CriaElemento(nome_p.value,preco_p.value)
        caixa.appendChild(elemento)
    }

})  