function mudartexto(){
    let d1 = document.getElementById("d1");
    d1.innerHTML = "Elemento da div1";
    let d2 = document.getElementById("d2");
    d2.innerHTML = "Elemento da div2";
    let d3 = document.getElementById("d3");
    d3.innerHTML = "Elemento da div3";
}
function func(...valores){
    console.log("Foram passados " + valores.length + " Parametros");
    let soma = 0;
  
    for ( i of valores ){
      console.log("Valor passado como parametro: "+i);
      soma+=i;
    }
    return soma;
  }
  console.log("Soma dos valores: " + func(2,3,4,5))
  // funções anonimas
  const valor = function(...valores){
    let soma = 0;
    for ( i of valores ){
      soma += i;
    }
    return soma;
  }
  console.log(valor(2,3,1,4))