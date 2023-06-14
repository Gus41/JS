let flag = 0

function botao(){
    const elementos = [...document.getElementsByClassName("curso")]
    if(flag == 0 ){
        elementos.map( (e)=>{
            e.classList.add("importante")
        })
        flag = 1;
    }else{
        flag = 0;
        elementos.map( (e)=>{
            e.classList.remove("importante")
        })
    }
}
function msg(){
    window.alert("CLICOU")
}
const cursos = [...document.querySelectorAll(".curso")];
cursos.map( (el)=>{
    el.addEventListener("click",(evt)=>{
        evt.target.classList.add("importante")
        window.alert(evt.target.innerHTML + " Foi clicado, com o id: " + el.id)
    })
})
/*
const c1 = document.querySelector("#c1") //pegando a div 0 html
c1.addEventListener("click",(evt)=>{
    window.alert(evt.target)
    evt.target.classList.add("importante")
}); //adicionando um evento de click no elemento

*/
