const mongoose = require('mongoose');

// instalamos o pacote validator ( npm i validator )
// para validar nosso formulario
const validator = require("validator")
// pacote bcryptjs
const bcript = require("bcryptjs")


const LoginSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true }

});

const LoginModel = mongoose.model('Login', LoginSchema);

class Login {

  constructor(body){
    this.body = body
    this.erros =[]
    this.user = null
  }
  async userExists(){
    const user = await LoginModel.findOne({email:this.body.email})

    if( user ){
      this.erros.push("Email já cadastrado")
    }
  }
  async register(){
    this.valida()
    if(this.erros.length > 0){
      return
    }
    await this.userExists();
    if(this.erros.length > 0){
      return
    }
    const salt = bcript.genSaltSync();
    this.body.password = bcript.hashSync(this.body.password, salt)
    try{
      // gerando um salt e fazendo um hash da senha com o mesmo salt  
      this.user = await LoginModel.create(this.body)
    }catch(e){
      console.log(e)
    }
  } 
  // verificando o body ( Verificando se todos são strings )
  cleanUp(){
    for(const key in this.body){
        if( typeof this.body[key] !== "string" ){
          this.body[key] = "";
        }
    }
    //removendo o csrfToken do body
    this.body = {
      email : this.body.email,
      password : this.body.password
    }


  }
  valida(){
    this.cleanUp();
    // validação
    // email precisa ser valido
    if( !validator.isEmail(this.body.email) ){
      this.erros.push("Email invalido")
      // verificando se é realmente um email, caso não seja, um erro sera adicionado nos erros
    }

    // a senha precisa ter entre 3 e 18 caracteres
    if( this.body.password.length < 3 ||  this.body.password.length >= 18 ){
      this.erros.push("Tamanho da senha invalido")
    }


  }
}
// selecionar palavra e apertar control + d ++++ para selecionar todas no documento
module.exports = Login;
