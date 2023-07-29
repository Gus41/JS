
function loadResult(response){
    const saida = document.getElementById("res")
    saida.innerHTML = response
}
async function carregdaPagina(elemento){

    try{
        const href = elemento.getAttribute("href")
    
        const response = await fetch(href)
        if( response.status !== 200 ){
            throw new Error("404")
        }
        const html = await response.text()
        loadResult(html)

        }catch(e){
            alert(e)
    }
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