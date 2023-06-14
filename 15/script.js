const caixa1 = document.getElementById("caixa1")
const caixa2 = document.getElementById("caixa2")
const btn = document.getElementById("btn_cp")

const elementos = [...document.getElementsByClassName("curso")]
elementos.map( (el)=>{
    el.addEventListener("click",(evt)=>{
    const curso = evt.target
    curso.classList.toggle("selecionado")
    })
})
btn.addEventListener("click",()=>{
    
    const selecionados = [...document.querySelectorAll(".selecionado")]
    selecionados.map( (e)=>{
        if (e.classList.contains("direita")){
            caixa1.appendChild(e)
            e.classList.toggle("direita")
        }else{
            caixa2.appendChild(e);
            e.classList.toggle("direita")
        }
    })
})