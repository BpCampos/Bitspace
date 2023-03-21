//* Importacações
const express = require('express');
const path = require('path')
const homeRouter = require('./routes/homeRouter')
const authRouter = require('./routes/authRouter')
//const methodOverride = require('method-override')

const app = express();
const port = 4000;

//* Configurações/middlewares
app.set('view engine', 'ejs');
app.set('views', path.resolve("src", "views"));
app.use(express.json());
app.use(express.static(path.resolve('src', 'public')));
//app.use(methodOverride('_method'))

//* Rotas
app.use(homeRouter);
app.use(authRouter);


app.listen(port, () => console.log(`O servidor está rodando na porta ${port}`));