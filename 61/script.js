function rand(min=0,max=3){
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
//espera("Fase1",rand(0,3)).then(dado=>{
//    console.log(dado)
//    return espera("Fase2",rand()).then(dado=>{
//        console.log(dado)
//        return espera("Fase3",rand()).then(dado=>{
///            console.log(dado)
//            return dado
//        }).then(e=>{
//            console.log("Terminado na fase: " + e)
//       })
//    })
//}).catch(err=>{
//    console.log(err)
//})
//--------------------------------------------------------------
async function execute(){
    try{
        const fase1 = await espera("Fase1-2",rand())
        console.log(fase1)
        const fase2 = await espera(5,rand())
        console.log(fase2)
        const fase3 = await espera("Fase3-2",rand())
        console.log(fase3)
        console.log("Finalizado na " + fase3)

    }catch(err){
        console.log(err)
        
    }
    
}
execute(0)