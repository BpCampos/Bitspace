function loggedUserMiddleware(req, res, next) {
    if (req.session.userLogged) {
        return res.redirect('/painelDoUsuario')
    }

    return next()
}
module.exports = loggedUserMiddleware;