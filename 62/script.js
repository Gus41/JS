
function loadResult(response){
    const saida = document.getElementById("res")
    saida.innerHTML = response
}
async function carregdaPagina(elemento){
    const href = elemento.getAttribute("href")
    const objConfig = {
        method:"GET",
        url: href
    };
    fetch(href).then( res => {
        if( res.status !== 200 ){
            throw new Error("ERRO 404")
        }
        return res.text()
    }).then(html => {
        loadResult(html)
    })
    .catch(err=>{
        alert(err)
    })
}
document.addEventListener("click",(e)=>{
    const el = e.target
    const tag = el.tagName.toLowerCase()
    if( tag === "a" ){
        e.preventDefault()
        // é o link
        carregdaPagina(el)

    }
})