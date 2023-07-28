function rand(min,max){
    min *= 1000
    max *= 1000

    return Math.floor(Math.random() * (max - min) + min)
}

function epseraAi(msg,tempo){
    return new Promise( (resolve,reject)=>{

        setTimeout(()=>{
            if( typeof(msg) !== "string" ){
            reject("Erro de tipagem")
            return
        }
            resolve(msg.toUpperCase() + " Passou na promise")
        },tempo)
    } )
}
//const promises = [epseraAi("PrimeiraPromise",3000),epseraAi("Segunda Promise",5000),epseraAi(1,20000),epseraAi("UltimoValor",1000)]
//Promise.race(promises).then(dados => {
//    console.log(dados)
//}).catch(err=>{
//    console.log(err)
//    //tratar erro
//})

function baixaPagina(){
    let emCache = false

    if(emCache){
        return Promise.resolve("Pagina em cache")
    }else{
        return epseraAi("Pagina baixada",rand(1,9))
    }
}
baixaPagina().then((msg)=>{
    console.log(msg)
}).catch(err=>{
    console.log(err)
})