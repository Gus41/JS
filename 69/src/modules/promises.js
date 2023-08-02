function promesa(){
    return new Promise( (resolve,reject)=>{
        setTimeout(()=>{
            console.log("Promessa retornada em 2s")
            resolve()
        },2000)
    })
}

export default async function execute(){
    await promesa()
    console.log("Terminou")
}