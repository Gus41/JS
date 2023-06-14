let colocacao = 3;


switch(colocacao){
    case 1:
        console.log("Primeira colocacao");
        break;
    case 2:
        console.log("Segunda colocacao");
        break;
    case 3:
        console.log("Terceiro lugar");
        break;
    case 4 : case 5: case 6: 
        console.log("Premio de participaçao");
        break;
    default:
        console.log("Não subiu no podio");
}

console.log("-----------------------------");

for ( let i = 0 ; i < 100 ; i ++ ){
    if( i%2 == 0 ){
        console.log( i + " É par");
    }else{
        console.log( i + " É impar");
    }
}
console.log("Fim do programa");
console.log("--------------------------------");