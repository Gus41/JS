const teclasNum = [...document.querySelectorAll(".num")]
const teclasOp = [...document.querySelectorAll(".Top")]
const res = document.getElementById("igual")
const display = document.getElementById("saida")
const CPY = document.getElementById("CPY")
const clear = document.getElementById("clear")
const teste = document.getElementById("teste")
const exibir = document.getElementById("aba")
const calc = document.getElementById("calc")

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
            if( evt.target.innerHTML == "x"){
                display.innerHTML += "*"
            }else{
                display.innerHTML += evt.target.innerHTML

            }
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
CPY.addEventListener("click",()=>{
    teste.select();
    teste.setSelectionRange(0,99); //moobile
    navigator.clipboard.writeText(teste.value)
    //navigator.clipboard.writeText(display.innerHTML) //copiar para area de transferencia
})
exibir.addEventListener("click",()=>{
    calc.classList.toggle("exibir")
})