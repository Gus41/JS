const mongoose = require('mongoose');
const validator = require("validator")



const ContatoSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  sobrenome: { type: String, required: false },
  email: { type: String, required: false },
  telefone: { type: String, required: false },
  criadoEm: {type: Date , default: Date.now}
});

const ContatoModel = mongoose.model('Contatos', ContatoSchema);




class Contato{
  constructor(body){
    this.body = body
    this.erros = []
    this.contato = null
  }

  register = async function(){
    this.valida()
  
    if(this.erros.length > 0){
      return
    }

    this.contato = await ContatoModel.create(this.body)
  }

  cleanUp = ()=>{

    console.log(this.body)
    for(const key in this.body){
        if( typeof this.body[key] !== "string" || !this.body[key]){
          this.body[key] = "";
        }
    }
  
    
    //removendo o csrfToken do body
   
    this.body = {
      nome : this.body.nome,
      email : this.body.email,
      sobrenome : this.body.sobrenome,
      telefone : this.body.telefone
    }
  
  }
  valida = function(){
    this.cleanUp();
    // validação
    // email precisa ser valido
    

    if(!this.body.nome){
      this.erros.push("Nome é um campo obrigatorio")
    }
    if( !this.body.email && !this.body.telefone){
      this.erros.push("Pelo menos uma forma de contato deve ser registrado(email ou telefone)")
    }
    if(this.body.email && !validator.isEmail(this.body.email) ){
      
      this.erros.push("Email invalido")
      // verificando se é realmente um email, caso não seja, um erro sera adicionado nos erros
    }

  
  }

  static async SearchID(id){
    if( typeof id !== "string"){
      return
    }

    const user = await ContatoModel.findById(id)
    // ou retorna null ou retorna um usuario

    return user

  }
  async edit(id){
    if(typeof id != "string"){
      return
    }
    this.valida();
    if(this.erros.length > 0){
      return
    }
    // new: true serve para retornar o contato com os dados atualizados
    this.contato =await ContatoModel.findByIdAndUpdate(id,this.body,{new : true})
  } 
  //
  static async GetContactcs(){

    const contacts = await ContatoModel.find().sort({criadoEm: 1})
    // retorna os ordenados de acordo com a criação dos mesmos ( 1 Para crescente e -1 para decresecente )
    console.log(contacts)
    return contacts

  }
  static async delete(id){
    if(typeof id != "string"){
      return
    }
    const contato = await ContatoModel.findByIdAndDelete({_id: id})
    return contato
  }
}


module.exports = Contato;
