const express = require("express")
const app = express();
// http://meusite.com/ <- GET

// CREATE READ UPDATE DELETE
// POST   GET   PUT   DELETE

app.get("/",(req,res)=>{ // primeiro parametro é a rota
    //requisição e resposta
    res.send(`
        <form action="/" method="POST">
        Nome: <input type:"text" name="nome">
        <button type="submit">Enviar</button>
        </form>
    `)
})
app.post("/",(req,res)=>{

    res.send(`
        Formulário recebido
    `)

})
app.get("/contato",(req,res)=>{
    res.send("Obrigado por entrar em contato")
})
//hospedando na porta 3000
app.listen(3000, ()=>{
    console.log("Acessar: http://localhost:3000")
    console.log("Servidor executando na porta 3000...")
}) //passando a porta



