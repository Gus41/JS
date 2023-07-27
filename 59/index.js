function NumeroAleatorio(min,max){
    min *= 1000
    max *= 1000
    return Math.floor(Math.random() * (max - min) + min)
}


function conectar(msg,tempo){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(msg)
        }, tempo);

    })
}

conectar("base1",NumeroAleatorio(3,9)).then( e =>{
    console.log(e)
    return conectar("base2",3,5).then( e =>{
        return e + "2"
    }).then(resposta => {
        console.log(resposta)
        return conectar("bas3",NumeroAleatorio(2,7)).then(e=>{
            console.log(e)
        }).then( ()=>{
            console.log("Ultimo a ser exibido")
        })
    })
})