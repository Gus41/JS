require("dotenv").config()


const express = require("express")
const app = express();
const mongo = require("mongoose")


mongo.connect(process.env.STRINGDECONEXAO).then( ()=>{
    console.log("Conexão efetuada")
    app.emit("conectado")
}).catch((e)=>{
    console.log("Erro de conexão")
})

const rotas = require("./routes")
const path = require("path")
const Mid = require("./src/middlewares/mid")

// http://meusite.com/ <- GET

// CREATE READ UPDATE DELETE
// POST   GET   PUT   DELETE

//pegando o que será postado e colocando no req.body
app.use(express.urlencoded({extended:true}))

//utilizando arquivos extaticos
app.use(express.static(path.resolve(__dirname,"public")))
// middwalre global
app.use(Mid)

app.set("views",path.resolve(__dirname,"src","views"))
app.set("view engine","ejs")

app.use(rotas)

//hospedando na porta 3000
app.on("conectado",()=>{
    app.listen(3000, ()=>{
        console.log("Acessar: http://localhost:3000")
        console.log("Servidor executando na porta 3000...")
    }) //passando a porta
    
})



