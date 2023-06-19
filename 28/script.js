const resultado = document.getElementById("res")
const add = document.getElementById("add")
const subtrai = document.getElementById("sbtr")
const mult = document.getElementById("mult")
const divide = document.getElementById("divide")

const verificacao = ()=>{
    const input1 = document.getElementById("valor1")
    const input2 = document.getElementById("valor2")

    if(input1.value.length < 1 || input2.value.length < 1){
        return false
    }else{
        return true;
    }

}
const operacoes = [
    (v1,v2)=>{
        return v1+v2;
    },
    (v1,v2)=>{
        return v1-v2;
    },
    (v1,v2)=>{
        return v1*v2
    },
    (v1,v2)=>{
        return v1/v2;
    }
]
add.addEventListener("click",()=>{
    if(verificacao()){
        const input1 = document.getElementById("valor1")
        const input2 = document.getElementById("valor2")
        const res = operacoes[0](parseInt(input1.value),parseInt(input2.value))
        resultado.innerHTML = res
    }else{
        window.alert("Adicione os dois valores antes")
    }
})
subtrai.addEventListener("click",()=>{
    if(verificacao()){
        const input1 = document.getElementById("valor1")
        const input2 = document.getElementById("valor2")
        const res = operacoes[1](parseInt(input1.value),parseInt(input2.value))
        resultado.innerHTML = res
    }else{
        window.alert("Adicione os dois valores antes")
    }
})
mult.addEventListener("click",()=>{
    if(verificacao()){
        const input1 = document.getElementById("valor1")
        const input2 = document.getElementById("valor2")
        const res = operacoes[2](parseInt(input1.value),parseInt(input2.value))
        resultado.innerHTML = res
    }else{
        window.alert("Adicione os dois valores antes")
    }
})
divide.addEventListener("click",()=>{
    if(verificacao()){
        const input1 = document.getElementById("valor1")
        const input2 = document.getElementById("valor2")
        const res = operacoes[3](parseInt(input1.value),parseInt(input2.value))
        resultado.innerHTML = res
    }else{
        window.alert("Adicione os dois valores antes")
    }
})