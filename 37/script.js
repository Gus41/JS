const teclasNum = [...document.querySelectorAll(".num")]
const teclasOp = [...document.querySelectorAll(".Top")]
const res = document.getElementById("igual")
const display = document.getElementById("saida")
const OnOff = document.getElementById("OnOff")
const clear = document.getElementById("clear")

let flag = false
let virgula = false

teclasNum.forEach((el)=>{
    el.addEventListener("click",(evt)=>{
        flag = false
        if(evt.target.innerHTML == ","){
            if(!virgula){
                virgula = true
                if(display.innerHTML == "0"){
                    display.innerHTML = "0,"
                }else{
                    display.innerHTML += evt.target.innerHTML
                }
            }
        }else{
            virgula = false
            if(display.innerHTML == "0"){
                display.innerHTML = ""
            }
            display.innerHTML += evt.target.innerHTML
        }

    })
})
teclasOp.forEach((el)=>{
    el.addEventListener("click",(evt)=>{
        if( !flag ){
            flag = true
            if( display.innerHTML == "0" ){
                display.innerHTML= ""
            }
            display.innerHTML += evt.target.innerHTML
        }
    })
})
clear.addEventListener("click",()=>{
    flag = false
    virgula = false
    display.innerHTML = '0'
})
res.addEventListener("click",()=>{
    flag = false
    virgula = false
    const resultado = eval(display.innerHTML)
    display.innerHTML = resultado;
})