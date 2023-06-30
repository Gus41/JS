const btn = document.getElementById("btn")
let caixa = document.getElementById("caixa")
const conteudo = document.getElementById("main")
const resultado = document.getElementById("res")

const calcula = (n1,n2)=>{

    let n;
    for ( let i = 0 ; i < 10 ; i += 0.1 ){
        if( (3/((1/n2) + (1/n2) + (1/i))) > 6 ){
            n = i;
            break;
        }
    }
    return n
}
btn.addEventListener("click",()=>{
    
    const nota1 = document.getElementById("n1")
    const nota2 = document.getElementById("n2")
    const nota3 = calcula(nota1.value,nota2.value)
    resultado.innerHTML = nota3
})