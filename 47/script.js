const alerta = document.getElementById("btn_alert")
const conf = document.getElementById("btn_confirm")
const promp = document.getElementById("btn_prompt")

alerta.addEventListener("click",()=>{
    alert("Janela de alerta")
})
conf.addEventListener("click",()=>{
    confirm("Confirma aí po")
})
promp.addEventListener("click",()=>{
    prompt("Digita alguma coisa ai po")
})