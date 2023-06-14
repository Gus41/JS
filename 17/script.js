const caixa = document.querySelector("#caixa");
const elementos = [...document.querySelectorAll(".item")]

caixa.addEventListener("click",(evt)=>{
    window.alert("CLICOU")
})
elementos.map((e)=>{
    e.addEventListener("click",(evento)=>{
        evento.stopPropagation()
    })
})
