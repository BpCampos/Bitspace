function notLoggedUserMiddleware(req, res, next) {
    if (!req.session.userLogged) {
        return res.redirect('/Pagina-login')
    }

    return next()
}
module.exports = notLoggedUserMiddleware;