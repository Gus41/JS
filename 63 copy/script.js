const Div_tabela = document.getElementById("tabela")
const table = document.createElement("table")
function addTitleInTable(table){
    let titulo = document.createElement("th")
    titulo.innerHTML = "Nome"
    let tr = document.createElement("tr")
    tr.appendChild(titulo)
    table.appendChild(tr)

    titulo = document.createElement("th")
    titulo.innerHTML = "Idade"
    tr.appendChild(titulo)
    table.appendChild(tr)

    titulo = document.createElement("th")
    titulo.innerHTML = "Email"
    tr.appendChild(titulo)
    table.appendChild(tr)

    titulo = document.createElement("th")
    titulo.innerHTML = "Sexo"
    tr.appendChild(titulo)
    table.appendChild(tr)

    titulo = document.createElement("th")
    titulo.innerHTML = "Empresa"
    tr.appendChild(titulo)
    table.appendChild(tr)

}
function addInTable(e){
    const tr = document.createElement("tr")
    let td = document.createElement("td")

    td.innerHTML = e.nome
    tr.appendChild(td)
    td = document.createElement("td")
    td.innerHTML = e.idade
    tr.appendChild(td)
    td = document.createElement("td")
    td.innerHTML = e.email
    tr.appendChild(td)
    td = document.createElement("td")
    td.innerHTML = e.sexo
    tr.appendChild(td)
    td = document.createElement("td")
    td.innerHTML = e.empresa
    tr.appendChild(td)

    table.appendChild(tr)
    Div_tabela.appendChild(table)
}

function loadElements(elementos){
    addTitleInTable(table)
    for( elemento of elementos ){
        addInTable(elemento)
    }

}

fetch("/63 copy/dados/pessoas.json").then(e=>{
    return e.json()
}).then( json=> loadElements(json) )