const elementos = [...document.getElementsByClassName("item")]
const btn = document.querySelector("#btn")
const caixa1 = document.getElementById("caixa1")
const caixa2 = document.getElementById("caixa2")

elementos.map( (e)=>{
    e.addEventListener("click",(evt)=>{
        const it = evt.target;
        it.classList.toggle("selecionado")
    })
})
btn.addEventListener("click",()=>{
    const selecionados = [...document.getElementsByClassName("selecionado")]
    selecionados.map( (e)=>{
        if(e.classList.contains("flag")){
            caixa1.appendChild(e);
            e.classList.toggle("flag")
            e.classList.remove("selecionado")
        }else{
            caixa2.appendChild(e);
            e.classList.toggle("flag")
            e.classList.remove("selecionado")
        }
    } )
})