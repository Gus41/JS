const elementos = [1,2,3,4,5,6,7,11]
const arr = document.querySelector("#arr")
const btn = document.querySelector("#btn")
const res = document.querySelector("#res")
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