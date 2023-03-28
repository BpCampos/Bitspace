function noProductSelected(req, res, next) {

    if (!req.session.sale) {
        res.redirect('/carrinho')
    }
    next()
}

module.exports = noProductSelected