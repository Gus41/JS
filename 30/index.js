class carro{
    constructor(nome,tipo){
      this.nome = nome;
      if ( tipo == 1 ){
        this.tipo = "Esport"
        this.vel = 300
      }else if( tipo == 2 ){
        this.tipo = "Utilitario"
        this.vel = 150
      }
    }
    info(){
      console.log("Nome : " +this.nome)
      console.log("Tipo : "+ this.tipo)
      console.log(`Velocidade maxima : ${this.vel}`)
      console.log("-----------------")
    }
    getNome(){
      return this.nome
    }
    getVel(){
      return this.vel
    }
    getTipo(){
      return this.tipo
    }
    getALL(){
      return [this.nome,this.vel,this.tipo]
    }
  }
  
  let c1 = new carro("Rapidinho",1)
  let c2 = new carro("Normal",2)
  
  c1.info();
  c2.info()