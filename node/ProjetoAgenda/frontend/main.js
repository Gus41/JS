import 'core-js/stable';
import 'regenerator-runtime/runtime';
//import './assets/css/style.css';
console.log("Ola mundo")
import LoginValidator from "./modules/Login"
const ValidaLogin = new LoginValidator(".form-register")
const ValidaRegister = new LoginValidator(".form-login")
ValidaLogin.init()
ValidaRegister.init()




