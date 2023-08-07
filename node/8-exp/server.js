const express = require("express")
const app = express();
// http://meusite.com/ <- GET

// CREATE READ UPDATE DELETE
// POST   GET   PUT   DELETE

app.use(express.urlencoded({extended:true}))

app.get("/",(req,res)=>{ // primeiro parametro é a rota
    //requisição e resposta
    res.send(`
        <form action="/" method="POST">
        Nome: <input type:"text" name="nome">
        <button>>Enviar</button>
        </form>
    `)
})
app.post("/",(req,res)=>{
    console.log(req.body)
    res.send(`
        Formulário recebido
    `)

})
app.get("/testes/:idUser?",(req,res)=>{
    console.log(req.params)
    console.log(req.query)
    res.send(req.params.idUser)
})
//hospedando na porta 3000
app.listen(3000, ()=>{
    console.log("Acessar: http://localhost:3000")
    console.log("Servidor executando na porta 3000...")
}) //passando a porta



