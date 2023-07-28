function rand(min,max){
    min *= 1000
    max *= 1000

    return Math.floor(Math.random() * (max - min) + min)
}

function epseraAi(msg,tempo){
    return new Promise( (resolve,reject)=>{
        if( typeof(msg) !== "string" ){
            reject(false)
        }

        setTimeout(()=>{
            resolve(msg.toUpperCase() + " Passou na promise")
        },tempo)
    } )
}
const promises = ["PrimeiroValor",epseraAi("PrimeiraPromise",3000),epseraAi("Segunda Promise",5000),epseraAi("UltimoValor",1000)]
Promise.all(promises).then(dados => {
    console.log(dados)
}).catch(err=>{
    console.log("Erro")
})