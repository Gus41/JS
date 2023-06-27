const teclasNum = [...document.querySelectorAll(".num")]
const teclasOp = [...document.querySelectorAll(".Top")]
const res = document.getElementById("igual")
const display = document.getElementById("saida")
const OnOff = document.getElementById("OnOff")
const clear = document.getElementById("clear")
teclasNum.forEach((el)=>{
    el.addEventListener("click",(evt)=>{
        display.innerHTML+=evt.target.innerHTML
    })
})
teclasOp.forEach((el)=>{
    el.addEventListener("click",(evt)=>{
        display.innerHTML+=evt.target.innerHTML
    })
})
clear.addEventListener("click",()=>{
    display.innerHTML = '0'
})