const produto = {
    nome: "Café",
    preço: 10.50,
    tipos:{
        tipo1: "Com leite",
        tipo2: "Puro",
        tipo3: "Fraco",
        tipo4: "Forte"
    }
}
const s_json = JSON.stringify(produto) // converte um objeto literal em uma sring JSON

//console.log(produto);
console.log(s_json);

const obj_produto = JSON.parse(s_json); // converte uma string JSON em um objeto literal
console.log(obj_produto)