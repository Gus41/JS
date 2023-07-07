const btn = document.getElementById("ir")
const input = document.getElementById("url")


btn.addEventListener("click",()=>{
   // window.location = "https://www.google.com.br" // redireciona
    //window.location.replace("https://www.google.com.br") // substitui a pagina e remove a pagina do historico
    //window.location.assign("https://www.google.com" // noa deleta do historico)
    //window.location.reload() // regarrega a pagina
    //window.history.back() // volta uma pagina no historico
    //window.history.forward() // proxima pagina do historico
    //window.history.go(1) // vai pra pagina do historico na posicao n
    //console.log(window.history.length) imprime o tamanho do historico
    window.location = input.value
})