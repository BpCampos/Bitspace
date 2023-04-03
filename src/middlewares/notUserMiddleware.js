function notUserMiddleware(req, res, next) {
    if (req.session.userLogged.isAdmin) {
        res.redirect('/')
    }
    next()
}

module.exports = notUserMiddleware