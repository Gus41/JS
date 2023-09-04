exports.middlewareGlobal = (req, res, next) => {
  res.locals.errors = req.flash('errors')
  res.locals.succes = req.flash('succes')
  res.locals.user = req.session.user

  next();
};

exports.outroMiddleware = (req, res, next) => {
  next();
};

exports.checkCsrfError = (err, req, res, next) => {
  if(err) {
    return res.render('404');
  }
  next();
};

exports.csrfMiddleware = (req, res, next) => {
  res.locals.csrfToken = req.csrfToken();
  next();
};

exports.loginRequired = (req,res,next)=>{
  if(!req.session.user){
    // usuario não logado
    req.flash("errors","Você precisa estar logado para acessar essa rota")
    req.session.save( ()=>{res.redirect("/")} )
    return
  }
  next()
}
