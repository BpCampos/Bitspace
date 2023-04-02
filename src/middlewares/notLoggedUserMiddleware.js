function notLoggedUserMiddleware(req, res, next) {
    if (!req.session.userLogged) {
        return res.redirect('/Pagina-Login')
    }

    return next()
}
module.exports = notLoggedUserMiddleware;