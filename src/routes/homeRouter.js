const express = require('express')
const homeController = require('../controllers/homeController')

const router = express.Router();
//Middlewares
const loggedUserMiddleware = require('../middlewares/loggedUserMiddleware');


router.get('/', homeController.showHome)
router.get('/carrinho/:id', homeController.showCarrinho)
router.get('/detalhe-produto/:id', homeController.showDetalheProduto)
router.get('/finalizacao-da-compra', homeController.showFinalizacaoDaCompra)
router.get('/listagem-produtos/:id', homeController.showListagemProduto)

router.get('/pagina-cadastro', loggedUserMiddleware, homeController.showPaginaCadastro)
router.post('/pagina-cadastro', homeController.createCadastro)
router.get('/pagina-login', loggedUserMiddleware, homeController.showPaginaLogin)
router.post('/pagina-login', homeController.loginProcess)
router.get('/painel-do-usuario', homeController.showPainelDoUsuario)

module.exports = router