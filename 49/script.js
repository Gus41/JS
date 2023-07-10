const objetos = document.getElementById("objs")
//objetos literais aula 90
let comp = {
    cpu: "i9",
    ram: "64gb",
    hd: "2tb",

    info: function(){
        console.log("CPU: " + this.cpu)
        console.log("RAM: " + this.ram)
        console.log("HD: " + this.hd)

    }
}
comp["Monitor"] = "22pol" // adicionando propriedades a objetos

const compcpy = Object.assign({},comp) // Copiando um objeto
compcpy.Monitor = "20Pol"

//array de objetos
const computadores = [
    {
        cpu: "i9",
        ram: "64gb",
        hd: "2tb"   
    },
    {
        cpu: "i9",
        ram: "64gb",
        hd: "2tb"   
    },
    {
        cpu: "i9",
        ram: "64gb",
        hd: "2tb"   
    },
    {
        cpu: "i9",
        ram: "64gb",
        hd: "2tb"   
    }
]
computadores.map( (e)=>{
    const div = document.createElement("div")
    div.classList.add("classe")
    div.innerHTML ="CPU: " + e.cpu + "<br>" + "RAM: " + e.ram + "<br>" + "HD: " + e.hd
    objetos.appendChild(div)
})
