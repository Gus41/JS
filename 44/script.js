const num_objs = document.getElementById("n_objs")
const palco = document.getElementById("palco")
const btn_remove = document.getElementById("btn_remove")
const QntsObjsADD = document.getElementById("n")
const btn_add = document.getElementById("btn_add")

let largura_palco = palco.offsetWidth
let altura_palco = palco.offsetHeight
let elementos = []
let num_elementos = 0

// retorna a largura e altura do palco sempre que o usuario mudar 
//o tamanho da janela
window.addEventListener("resize",(evt)=>{
    let largura_palco = palco.offsetWidth
    let altura_palco = palco.offsetHeight
})
class Elemento{
    constructor(ArrElementos,palco){
        this.tam =Math.floor((Math.random()*10) + 10) // tamanho dos elementos sera entre 10 e 20
        //floor aredonda o valor
        this.r = Math.floor(Math.random()*255) // red
        this.g = Math.floor(Math.random()*255) // green
        this.b = Math.floor(Math.random()*255) // blue
        this.px = Math.floor(Math.random()*largura_palco - this.tam) // posicao x onde o elemento vai spawnar
        this.py = Math.floor(Math.random()*altura_palco) - this.tam // posicao y onde o elemento vai spawnar
        this.velx = Math.floor(Math.random()*2) + 0.5 //velocidade X maxima sera de 2,5 e minima de 0.5
        this.vely = Math.floor(Math.random()*2) + 0.5
        this.direcaox = ( Math.random() * 10 ) > 5? 1: -1 // se o numero sorteado for menor que cinco a direcao x inicial sera -1
        this.direcaoy = ( Math.random() * 10 ) > 5? 1: -1 // se o numero sorteado for menor que cinco a direcao x inicial sera -1
        this.palco = palco 
        this.ArrElementos = ArrElementos
        this.id = Date.now() + "_" + Math.floor(Math.random()*1000000000)
        this.desenhar()
        this.controle = setInterval(this.controlar,10) // atualiza a posicao do elemento a cada 10 ms
        this.ele = document.getElementById(this.id)
        num_elementos++
        num_objs.innerHTML = num_elementos 
        this.ele.addEventListener("click",()=>{
            this.self_remove();
        })
    }
    posicao = ()=>{
        return this.ArrElementos.indexOf(this)
    }
    self_remove = ()=>{
        clearInterval(this.controle)
        elementos = elementos.filter((e)=>{
            if(e.id != this.id){ // retorna todos os elementos menos o com o id do elemento atual
                return e
            }
        })

        this.ele.remove();
        num_elementos--
        num_objs.innerHTML = num_elementos
    }
    desenhar = ()=>{
        const div = document.createElement("div")
        div.setAttribute("class","elemento")
        div.setAttribute("id",this.id)
        div.setAttribute("style",`left: ${this.px}px;top:${this.py}px;width:${this.tam}px;height:${this.tam}px;background-color: rgb(${this.r},${this.g},${this.b});`)
        this.palco.appendChild(div)
    }
    colisao_borda = ()=>{
        if( this.px + this.tam >= largura_palco){ // colisao na direita
            this.direcaox = -1
        }else if ( this.px <= 0 ){ // colisao na esquerda
            this.direcaox = 1
        }

        if( this.py + this.tam >= altura_palco){ // colisao em cima
            this.direcaoy = -1
        }else if ( this.py <= 0 ){ // colisao em baixo
            this.direcaoy = 1
        }
        
    }
    controlar = ()=>{
        this.colisao_borda()
        this.px += this.direcaox*this.velx // incrementando com a direcao * velocidade
        this.py += this.direcaoy*this.velx // incrementando com a direcao * velocidade
        this.ele.setAttribute("style",`left: ${this.px}px;top:${this.py}px;width:${this.tam}px;height:${this.tam}px;background-color: rgb(${this.r},${this.g},${this.b});`)
        if ( this.px >= largura_palco || this.py >= altura_palco ){
            this.self_remove() // bolinha fora da janela ( nao funciona )
        }
    }
}




btn_add.addEventListener("click",(evt)=>{
    if(QntsObjsADD.value < 1){
        alert("Por favor insira a quantidade de elemntos antes")
    }else{
        const quantidade = QntsObjsADD.value
        for ( let i = 0 ; i < quantidade ; i ++ ){
            //instanciar novos elementos
            elementos.push(new Elemento(elementos,palco))

        }
    }
})
btn_remove.addEventListener("click",(evt)=>{
    window.alert("Removendo todos elementos")
    elementos.map((e)=>{
        e.self_remove()
    })
})