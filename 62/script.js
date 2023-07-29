const request = obj =>{
    const xhr = new XMLHttpRequest()  //xml http request
    xhr.open(obj.method,obj.url,true)
    xhr.send() // post


    xhr.addEventListener("load",()=>{ // será executado quando tiver recebido a resposta do servidor
        // entre 200 e 300 === aceitar
        if( xhr.status >= 200 && xhr.status <= 300 ){
            //requesição de sucesso
            obj.succes(xhr.responseText)
        }else{
            // requesição falhou
            obj.error(xhr.statusText)
        }
    })
}
document.addEventListener("click",(e)=>{
    const el = e.target
    const tag = el.tagName.toLowerCase()
    if( tag === "a" ){
        // é o link
        

    }
})