const request = obj =>{
    const xhr = new XMLHttpRequest()  //xml http request
    xhr.open(obj.method,obj.url,true)
    xhr.send() // post


    xhr.addEventListener("load",()=>{
        
    })
}