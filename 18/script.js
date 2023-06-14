const caixa = document.getElementById("caixa")
const elementos = ["ITEM1","ITEM2","ITEM3","ITEM4","ITEM4","ITEM5"]
const btn = document.getElementById("b")

btn.addEventListener("click",()=>{
    elementos.map( (e)=>{
        const novo = document.createElement("div")
        novo.setAttribute("class","elemento")
        novo.innerHTML = e;
        caixa.appendChild(novo)
    })
})