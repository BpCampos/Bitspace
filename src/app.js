//* Importacações
const express = require('express');
const path = require('path');
const homeRouter = require('./routes/homeRouter');
const authRouter = require('./routes/authRouter');
const methodOverride = require('method-override');
const session = require('express-session');
const loggedUserDataMiddleware = require('../src/middlewares/loggedUserDataMiddleware');
const loggedAdminDataMiddleware = require('../src/middlewares/loggedAdminDataMiddleware')
const cookies = require('cookie-parser');

const app = express();
const port = 4000;

app.use(session({
    secret: "senhamuitosecreta",
    resave: false,
    saveUninitialized: false,
}));
app.use(cookies());
app.use(loggedUserDataMiddleware);
app.use(loggedAdminDataMiddleware)


//* Configurações/middlewares
app.set('view engine', 'ejs');
app.set('views', path.resolve("src", "views"));
app.use(express.json());
app.use(express.static(path.resolve('src', 'public')));
app.use(methodOverride('_method'))
app.use(express.urlencoded({ extended: false }));


//* Rotas
app.use(homeRouter);
app.use(authRouter);


app.listen(port, () => console.log(`O servidor está rodando na porta ${port}`));