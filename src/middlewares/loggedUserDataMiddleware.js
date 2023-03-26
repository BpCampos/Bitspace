const User = require('../models/User');
function loggedUserDataMiddleware(req,res,next){

    res.locals.isLogged = false;

let emailInCookie = req.cookies.userEmail;
//let senhaInCookie = req.cookies.userSenha;
let userFromCookie = User.findUserByField('email',emailInCookie);

if(userFromCookie){
    req.session.userLogged = userFromCookie;
}

    if(req.session.userLogged){
        res.locals.isLogged = true;
    }
    

next()
}
module.exports = loggedUserDataMiddleware;