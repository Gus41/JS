const elementos = [1,2,3,4,5,6,7,11]
const arr = document.querySelector("#arr")
const btn = document.querySelector("#btn")
const res = document.querySelector("#res")
const btn2 = document.getElementById("btn2")
const btn3 = document.getElementById("btn3")


arr.innerHTML = "Array:  ["+elementos+"]"
res.innerHTML = "Resultado da verificação virá aqui"

btn.addEventListener("click", ()=>{
    res.innerHTML = "Array de elementos não ok"
    const r = elementos.every( (e,i)=>{
        if( e <= 10 ){
            res.innerHTML = "Array de elementos não ok na linha: "+(i+1)
        }
        return e<10;
    })

    if(r){
        res.innerHTML = "Array de elementos ok"
    }
})

btn2.addEventListener("click", ()=>{
    res.innerHTML ="Array não conforme"
    const r = elementos.some( (e,i)=>{
    
        return e > 10;
    })

    if(r){
        res.innerHTML = "Array conforme, o metodo some retorna se apenas alguns elementos contem essa condiçao do array"
    }
})
let saida = []
btn3.addEventListener("click",()=>{
    alert("ue")
    elementos.reduce((atual,anterior,pos)=>{
        saida.push(anterior*2)
    })

    res.innerHTML = saida;
})