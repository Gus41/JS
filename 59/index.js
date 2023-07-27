function NumeroAleatorio(min,max){
    min *= 1000
    max *= 1000
    return Math.floor(Math.random() * (max - min) + min)
}


function conectar(msg,tempo){
    setTimeout(() => {
        console.log(msg)
    }, tempo);
}

conectar("base1",NumeroAleatorio(1,10))
conectar("base2",NumeroAleatorio(1,10))
conectar("base3",NumeroAleatorio(1,10))