const express = require('express')
const homeController = require('../controllers/homeController')

const router = express.Router();
//Middlewares
const loggedUserMiddleware = require('../middlewares/loggedUserMiddleware');
const notLoggedUserMiddleware = require('../middlewares/notLoggedUserMiddleware');
const noProductSelected = require('../middlewares/noProductSelected')


router.get('/', homeController.showHome)
router.get('/carrinho/:id', homeController.showCarrinho)
router.post('/carrinho/:id', notLoggedUserMiddleware, homeController.saleInfo)
router.get('/detalhe-produto/:id', homeController.showDetalheProduto)
router.get('/finalizacaoDaCompra', noProductSelected, homeController.showFinalizacaoDaCompra)
router.post('/finalizacaoDaCompra/create', homeController.createSale)
router.get('/Listagem-Produtos/:id', homeController.showListagemProduto)
router.get('/Pagina-Cadastro', loggedUserMiddleware, homeController.showPaginaCadastro)
router.post('/Pagina-Cadastro', homeController.createCadastro)
router.get('/Pagina-Login', loggedUserMiddleware, homeController.showPaginaLogin)
router.post('/Pagina-Login', homeController.loginProcess)
router.get('/painelDoUsuario', notLoggedUserMiddleware, homeController.showPainelDoUsuario)

module.exports = router