const { Client, Admin } = require('../models');

async function loggedUserDataMiddleware(req, res, next) {

    res.locals.isLogged = false;

    let emailInCookie = req.cookies.userEmail;

    if (emailInCookie) {
        let userFromCookie = await Client.findOne({ where: { email: emailInCookie } });

        let userFromCookieAdmin = await Admin.findOne({ where: { email: emailInCookie } })

        if (userFromCookie || userFromCookieAdmin) {
            req.session.userLogged = userFromCookie || userFromCookieAdmin;
        }


        if (req.session.userLogged) {
            res.locals.isLogged = true;

        }

        console.log(res.locals.isLogged)

    }

    next()
}
module.exports = loggedUserDataMiddleware;