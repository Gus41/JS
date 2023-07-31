import GeraCpf from "./modules/GeraCpf"
import "./assets/css/style.css"
// Função auto executada
(function(){
    const Gerador = new GeraCpf()
    const saida = document.getElementById("res")
    saida.innerHTML = Gerador.GeraNovoCpf()
})();

