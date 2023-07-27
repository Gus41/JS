function NumeroAleatorio(min,max){
    min *= 1000
    max *= 1000
    return Math.floor(Math.random() * (max - min) + min)
}


function conectar(msg,tempo){
    return new Promise((resolve,reject)=>{
        if(typeof(msg) !== "string"){
            reject("BAD VALUE")
        }
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
        return conectar(22,NumeroAleatorio(2,4)).then(e=>{
            console.log(e)
        }).then( ()=>{
            console.log("Ultimo a ser exibido")
        })
    })
}).catch(e=>{ // se houver qualquer erro na cadeia, o desvio vira aqui
    console.log("ERRO: " + e)

})