import 'core-js/stable';
import 'regenerator-runtime/runtime';
//import './assets/css/style.css';
import LoginValidator from "./modules/Login"
const ValidaLogin = new LoginValidator(".form-register")
const ValidaRegister = new LoginValidator(".form-login")
ValidaLogin.init()
ValidaRegister.init()
import ValidaContato from './modules/Contato';
const validacontato = new ValidaContato(".contato")
validacontato.init()




