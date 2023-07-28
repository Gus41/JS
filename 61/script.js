function rand(min,max){
    min *= 1000
    max *= 1000

    return Math.floor(Math.random() * (max - min) + min )
}
function espera(msg,tempo){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(typeof(msg) !== "string"){
                reject("Erro de tipagem")
                return
            }
            resolve(msg.toUpperCase() + " Passou na promise")
            return
        },tempo)
    })
}
espera("")