const btn_add = document.getElementById("add")
const caixa_produto = document.getElementById("produtos")

btn_add.addEventListener("click",()=>{
    const nome = document.getElementById("produto")
    const preco = document.getElementById("valor")
    if( nome.value.length < 1 || preco.value <= 0 ){
        alert("Insira o nome e valor do produto antes de inserir")
    }else{
        
        const prod = document.createElement("div")
        prod.classList.add("produtosaida")
        prod.innerHTML = nome.value
        const valorsaida = document.createElement("div")
        valorsaida.innerHTML = preco.value
        valorsaida.classList.add("valorsaida")
        prod.appendChild(valorsaida)
        const botao = document.createElement("button")
        botao.innerHTML = "REMOVER"
        botao.classList.add("btn")
        botao.addEventListener("click",()=>{
            const container = botao.parentElement
            caixa_produto.removeChild(container)
        })
        prod.appendChild(botao)
        caixa_produto.appendChild(prod)
    }
})