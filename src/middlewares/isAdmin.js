function isAdmin(req, res, next) {

    if (!req.session.adminLogged) {
        res.redirect('/')
    }

    next()
}

module.exports = isAdmin