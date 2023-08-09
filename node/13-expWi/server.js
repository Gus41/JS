const express = require("express")
const app = express();
const rotas = require("./routes")
const path = require("path")
// http://meusite.com/ <- GET

// CREATE READ UPDATE DELETE
// POST   GET   PUT   DELETE

//pegando o que será postado e colocando no req.body
app.use(express.urlencoded({extended:true}))

//utilizando arquivos extaticos
app.use(express.static(path.resolve(__dirname,"public")))



app.set("views",path.resolve(__dirname,"src","views"))
app.set("view engine","ejs")

app.use(rotas)

//hospedando na porta 3000
app.listen(3000, ()=>{
    console.log("Acessar: http://localhost:3000")
    console.log("Servidor executando na porta 3000...")
}) //passando a porta



