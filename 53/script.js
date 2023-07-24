const pessoas = [
    {id:3,nome:"Luiz"},
    {id:2,nome:"Maria"},
    {id:1,nome:"Helena"},
]
const novasPessoas = new Map()

for( pes of pessoas ){
    const {id} = pes
    novasPessoas.set(id,{...pes})
}
console.log(novasPessoas)
console.log(novasPessoas.get(2)) // chamando com a chave 2

for ( const pessoas of novasPessoas ){
    console.log(pessoas) // retorna um array com a chave e com o objeto
}