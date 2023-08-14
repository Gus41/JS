const mong = require("mongoose")
const HomeSchema = new mong.Schema({
    titulo: {type: String, required: true}, //String e requirido
    descricao : {type: String, required: true}
})

const HomeModel = mong.model("home",HomeSchema)


module.exports = HomeModel