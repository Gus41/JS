const Contato = require("../models/ContatoModel")

exports.paginaInicial = (req, res) => {
  res.render('index')
  return;
};
