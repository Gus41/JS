const saida = document.getElementById("saida")
const relogio = document.getElementById("relog")


const att = ()=>{
    const data = new Date()
    let hr = data.getHours()
    hr = hr<10?"0"+hr:hr
    let mn = data.getMinutes()
    mn = mn<10?"0"+mn:mn
    let s = data.getSeconds()
    s = s<10?"0"+s:s

    const horario_str = hr + ":" + mn + ":" + s
    relogio.innerHTML = horario_str
}

const intervalo = setInterval(att,1000)