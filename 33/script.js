const btn = document.getElementById("btn")
const res = document.getElementById("res")

const Pessoa={
    nome,
    idade,
    getNome : function(){
        return this.nome
    },
    getIdade : function(){
        return this.idade
    },
    setNome: function(nome){
        this.nome = nome
    },
    setIdade : function(idade){
        this.idade = idade;
    }
}
const verifica = ()=>{
    const inp1 = document.getElementById("nome")
    const inp2 = document.getElementById("idade")
    if( inp1.value < 1 || inp2.value < 1){
        return false
    }else{
        return true
    }
}
btn.addEventListener("click",()=>{
    if(verifica()){
        const inp1 = document.getElementById("nome")
        const inp2 = document.getElementById("idade")

        Pessoa.setIdade(inp2.value)
        Pessoa.setNome(inp1.value)

        res.innerHTML += "Nome: " + Pessoa.getNome() + ", Idade: " + Pessoa.getIdade() +"<br\>"


    }else{
        window.alert("Preencha os campos antes")
    }
})