const { Admin } = require('../models');

async function loggedAdminDataMiddleware(req, res, next) {

    res.locals.isLogged = false;

    let emailInCookie = req.cookies.userEmail;

    if (emailInCookie) {
        let userFromCookie = await Admin.findOne({ where: { email: emailInCookie } });


        if (userFromCookie) {
            req.session.adminLogged = userFromCookie;
        }


        if (req.session.adminLogged) {
            res.locals.isLogged = true;
        }

    }

    next()
}
module.exports = loggedAdminDataMiddleware;