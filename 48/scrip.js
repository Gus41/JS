const btn = document.getElementById("btn")
const conteudo = document.getElementById("tabela")

btn.addEventListener("click",()=>{
    //window.print() imprimi a tela
    const conteudo = document.getElementById("tabela").innerHTML
    let estilo = "<style>"
    estilo += "tabel{ width: 100%;font:25px Calibri;}"
    estilo +="tabel,th,td{border: solid 1px black; border-collapse> collapse;"
    estilo += "padding: 4px 6px; text-align: center;}"
    estilo += "</style>"
    
    const win = window.open('','','height:700,width=700') //criacao de uma nova janela
    //1 parametro: url, 2: target "onde vai abrir", 3 configurações

    win.document.write("<html><head>")
    win.document.write("<title>TESTE DE IMPRESSÃO</title>")
    win.document.write(estilo)
    win.document.write("</head>")
    win.document.write("<body>")
    win.document.write(conteudo)
    win.document.write("</body></html>")
    
    win.print()

})