const saida = document.getElementById("num")
const btn_incr = document.getElementById("btn+")
const btn_dec = document.getElementById("btn-")
const reset = document.getElementById("reset")
let n = 0;

btn_incr.addEventListener("click",()=>{
    n++;
    saida.innerHTML = n
})
reset.addEventListener("click",()=>{
    n = 0
    saida.innerHTML = n
})
btn_dec.addEventListener("click",()=>{
    n--
    saida.innerHTML = n
})