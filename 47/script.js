const alerta = document.getElementById("btn_alert")
const conf = document.getElementById("btn_confirm")
const promp = document.getElementById("btn_prompt")
const conteudo = document.getElementById("main")
alerta.addEventListener("click",()=>{
    alert("Janela de alerta")
})
conf.addEventListener("click",()=>{
    if (confirm("Gostaria de confirmar? ")){
        alert("Confirmado")
    }else{
        alert("Nao confirmado")
    }
})
promp.addEventListener("click",()=>{
    const string = prompt("Digita alguma coisa ai po","Texto Padrão")
    const div = document.createElement("div")
    div.innerHTML = string
    conteudo.appendChild(div)

})