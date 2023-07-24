const pessoaPrototype = {
    fala(){
        console.log("Ola me chamo: " + this.nome)
    }
}
function criaPessoa(nome,sobrenome){
    return Object.create(pessoaPrototype,{
        nome: {value:nome},
        sobrenome: {value:sobrenome}
    })
}

const p1 = criaPessoa("Luiz","Otavio")
console.log(p1)
p1.fala()