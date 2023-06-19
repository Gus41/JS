const mapa = new Map();
mapa.set("chave1",1)
mapa.set("chave2",2)
mapa.set("chave3",3)
mapa.set("chave4",4)
mapa.set("chave5",5)
mapa.set("chave6",6)
const chave = "chave2"
mapa.delete("chave2")
if(mapa.has(chave)){
  console.log("A chave "+chave + " Existe no sistema")
}else{
  console.log("A chave NÂO existe no sistema")
}