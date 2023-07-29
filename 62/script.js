const request = obj =>{

    return new Promise((resolve,reject)=>{
        const xhr = new XMLHttpRequest()  //xml http request
        xhr.open(obj.method,obj.url,true)
        xhr.send() // post
    
    
        xhr.addEventListener("load",()=>{ // será executado quando tiver recebido a resposta do servidor
            // entre 200 e 300 === aceitar
            if( xhr.status >= 200 && xhr.status <= 300 ){
                //requesição de sucesso
                resolve(xhr.responseText)
            }else{
                // requesição falhou
                reject(xhr.statusText)
            }
        })
    })
}
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
    try{
        const response = await request(objConfig)    
        loadResult(response)
    }catch(err){
        alert(err)
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