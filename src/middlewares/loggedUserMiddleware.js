function loggedUserMiddleware(req, res, next) {
    if (req.session.userLogged) {
        return res.redirect('/painelDoUsuario')
    }
    next()
}
module.exports = loggedUserMiddleware;