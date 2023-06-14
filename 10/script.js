function aluno(nome,nota){
    this.nome = nome;
    this.nota = nota;
  
    this.dados = function(){
      setTimeout(()=>{
        console.log(this.nome)
        console.log(this.nota)
      },3000)
    }
  
  
  }
  const aluno1 = new aluno("Anderson",34)
  aluno1.dados();