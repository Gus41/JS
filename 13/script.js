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