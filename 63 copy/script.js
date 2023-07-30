const Div_tabela = document.getElementById("tabela")
const table = document.createElement("table")
function addTitleInTable(table){
    const titulo = document.createElement("th")


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
    for( elemento of elementos ){
        addInTable(elemento)
    }

}

fetch("/63 copy/dados/pessoas.json").then(e=>{
    return e.json()
}).then( json=> loadElements(json) )