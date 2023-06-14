let n = 5;
let saida = 1;

while ( n > 1 ){
    console.log(saida + "*" + n)
    saida *= n;
    n--;
}
console.log(saida);