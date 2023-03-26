function loggedUserMiddleware(req,res,next){
    if(req.session.userLogged){
    return res.redirect('..src/views/painelDoUsuario')
}
next()
}
module.exports = loggedUserMiddleware;