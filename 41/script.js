const btn = document.getElementById("btn")
const corpo = document.getElementById("corpo")
const cores = ["red","blue","black","#111","purple","pink","gray"]
const txt = document.getElementById("texto")

btn.addEventListener("click",()=>{
    const elemento = cores[Math.floor(Math.random()*cores.length)]
    corpo.style.backgroundColor = elemento
    txt.innerHTML = "Background color: " + elemento
})