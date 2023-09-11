const Contato = require("../models/ContatoModel")

exports.paginaInicial = async (req, res) => {
  const contatos = await Contato.GetContactcs()

  //injetando os contatos dentro no index
  res.render("index",{contatos})
};
