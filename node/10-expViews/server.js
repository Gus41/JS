const express = require("express")
const app = express();
const rotas = require("./routes")
// http://meusite.com/ <- GET

// CREATE READ UPDATE DELETE
// POST   GET   PUT   DELETE

//pegando o que será postado e colocando no req.body
app.use(express.urlencoded({extended:true}))

app.use(rotas)

//hospedando na porta 3000
app.listen(3000, ()=>{
    console.log("Acessar: http://localhost:3000")
    console.log("Servidor executando na porta 3000...")
}) //passando a porta



