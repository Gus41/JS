const Div_tabela = document.getElementById("tabela")
const table = document.createElement("table")

let contador = 0
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

    tr.classList.add("elemento")
    table.appendChild(tr)
    Div_tabela.appendChild(table)
}

function loadElements(elementos){
    addTitleInTable(table)
    for( let elemento of elementos ){
        contador++
        addInTable(elemento)
    }

}
function createError(msg){

    const div = document.createElement("div")
    div.innerText = msg
    div.classList.add("erro")

    input.insertAdjacentElement("afterend",div)
}
function pesquisa(){
    if(!input.value){
        createError("Input sem conteudo")
        return
    }
    
    let nome = input.value
    nome = nome.replace(" ","")
    alert(nome)
    console.log("Contador: " + contador)
    const elementos = document.querySelectorAll(".elemento")
    for( let i =  0 ; i < contador ; i ++){
        let elemento = elementos[i]
        let nome_table = elemento.children
        nome_table = nome_table[0].innerHTML

        if( nome === nome_table ){
            for( grif of table.querySelectorAll(".grif")){
                grif.classList.remove("grif")
            }
            alert("Elemento grifado na tabela")
            elemento.classList.add("grif")
            return
        }
    }
    createError("Elemento não encontrado")

}
const input = document.getElementById("pesq")
const btn = document.getElementById("btn")
btn.addEventListener("click",()=>{
    for( errortext of document.querySelectorAll(".erro") ){
        errortext.remove()
    }
    pesquisa()
})
fetch("/63 copy/dados/pessoas.json").then(e=>{
    return e.json()
}).then( json=> {   
    loadElements(json) 
})