function criaDiv(pessoa,alvo){
    const table = document.createElement("table")
    const tr = document.createElement("tr")


    let td = document.createElement("td")
    td.innerHTML = pessoa.nome
    tr.appendChild(td)
    td = document.createElement("td")
    td.innerHTML = pessoa.idade
    tr.appendChild(td)
    td = document.createElement("td")
    td.innerHTML = pessoa.salario
    tr.appendChild(td)


    table.appendChild(tr)
    alvo.appendChild(table)
}

function loadElements(json){
    const saida = document.getElementById("tabela")
    
    const table = document.createElement("table")

    for ( pessoa of json ){
        
        let tr = document.createElement("tr")


        let td = document.createElement("td")
        td.innerHTML = pessoa.nome
        tr.appendChild(td)
        td = document.createElement("td")
        td.innerHTML = pessoa.idade
        tr.appendChild(td)
        td = document.createElement("td")
        td.innerHTML = pessoa.salario
        tr.appendChild(td)


        table.appendChild(tr)
    }


    saida.appendChild(table)

}

fetch("/63/dados/pessoas.json").then( resposta=>{
    return resposta.json()
}).then(json=> loadElements(json))