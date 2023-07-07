const palco = document.getElementById("palco")
const btn_add = document.getElementById("btn_add")
const qnt_inp = document.getElementById("qnt")
const num_objs = document.getElementById("n_objetos")

let h_palco = palco.offsetHeight
let w_palco = palco.offsetWidth
let elementos = []
let num_elementos = 0


window.addEventListener("resize",()=>{
    h_palco = palco.offsetHeight
    w_palco = palco.offsetWidth
    
})
class Elemento{
    constructor(Array,palco){
        this.tam = Math.floor(Math.random() * 10 ) + 10// tamanho dos elementos
        this.red = Math.floor(Math.random() * 255) // rgb
        this.blue = Math.floor(Math.random() * 255) // rgb
        this.green = Math.floor(Math.random() * 255)// rgb
        this.px = Math.floor(Math.random() * w_palco - this.tam)// pos eixo x
        this.py = Math.floor(Math.random()* h_palco - this.tam ) // pos eixo y
        this.velx = Math.floor(Math.random() *2) + 0.5
        this.vely = Math.floor(Math.random() *2) + 0.5 // velocidade de movimentaçao no eixo y
        this.direcaox = (Math.random() * 10 ) > 5 ? 1 : -1 //sorteando direcao inicial
        this.direcaoy = (Math.random() * 10 ) > 5 ? 1 : -1
        this.palco = palco
        this.arr = Array
        this.id = Date.now() + "_" + Math.floor(Math.random()*1000000000)
        this.desenhar()
        this.controle = setInterval(this.controlar(),10)
        this.ele = document.getElementById(this.id)
        num_elementos++
        num_objs.innerHTML = num_elementos
        this.ele.addEventListener("click",()=>{
            //...
        })
    }
    posicao = ()=>{
        return this.Array.indexOf(this)
    }
    self_remove = ()=>{
        clearInterval(this.controle)
        elementos = elementos.filter( (e)=>{
            if( e.id != this.id ){
                return e
            }
        })
        this.ele.remove()
        num_elementos--
        num_objs.innerHTML = num_elementos
    }
    desenhar = ()=>{
        const div = document.createElement("div")
        div.setAttribute("class","elemento")
        div.setAttribute("id",this.id)
        div.setAttribute("style",`left: ${this.px}px;top:${this.py}px;width:${this.tam}px;height:${this.tam}px;background-color: rgb(${this.red},${this.green},${this.blue});`)
        this.palco.appendChild(div)
    }

    colisao_borda = ()=>{
        if( this.px + this.tam >= w_palco){ // colisao na direita
            this.direcaox = -1
        }else if ( this.px <= 0 ){ // colisao na esquerda
            this.direcaox = 1
        }

        if( this.py + this.tam >= h_palco){ // colisao em cima
            this.direcaoy = -1
        }else if ( this.py <= 0 ){ // colisao em baixo
            this.direcaoy = 1
        }
    }
    controlar = ()=>{
        this.colisao_borda()
        this.px += this.direcaox*this.velx
        this.py += this.direcaoy*this.vely
        this.ele.setAttribute("style",`left: ${this.px}px;top:${this.py}px;width:${this.tam}px;height:${this.tam}px;background-color: rgb(${this.red},${this.green},${this.blue});`)
        if ( this.px >= w_palco || this.py >= h_palco ){
            this.self_remove()
        }
    }
}
btn_add.addEventListener("click",()=>{
    if(qnt_inp.value < 1){
        alert("Insira a quantidade antes")
    }else{
        const q = qnt_inp.value 
        for ( let i = 0 ; i < q ; i ++ ){
            elementos.push(new Elemento(elementos,palco))

        }
    }
})