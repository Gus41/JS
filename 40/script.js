const saida = document.getElementById("saida")
const data = new Date()

const data_r = data.getDate() + "/" + data.getMonth() + "/" + data.getFullYear()

saida.innerHTML = data_r