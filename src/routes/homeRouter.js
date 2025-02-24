const express = require('express')
const homeController = require('../controllers/homeController')

const router = express.Router();
//Middlewares
const loggedUserMiddleware = require('../middlewares/loggedUserMiddleware');
const notLoggedUserMiddleware = require('../middlewares/notLoggedUserMiddleware');
const noProductSelected = require('../middlewares/noProductSelected')
const isAdmin = require('../middlewares/isAdmin')
const notUserMiddleware = require('../middlewares/notUserMiddleware')


router.get('/', homeController.showHome)
router.get('/Listagem-Produtos', homeController.searchProduct)
router.get('/carrinho/:id', homeController.showCarrinho)
router.post('/carrinho/:id', homeController.carrinhoInfo)
router.get('/detalhe-produto/:id', homeController.showDetalheProduto)
router.get('/finalizacaoDaCompra', noProductSelected, notUserMiddleware, homeController.showFinalizacaoDaCompra)
router.post('/finalizacaoDaCompra/:id', notLoggedUserMiddleware, notUserMiddleware, homeController.saleInfo)
router.post('/finalizacaoDaCompra/create', homeController.createSale)
router.get('/Listagem-Produtos/:id', homeController.showListagemProduto)
router.get('/Pagina-Cadastro', loggedUserMiddleware, homeController.showPaginaCadastro)
router.post('/Pagina-Cadastro', homeController.createCadastro)
router.get('/pagina-cadastro-admin', homeController.showPaginaCadastroAdmin)
router.post('/pagina-cadastro-admin', homeController.createAdmin)
router.get('/Pagina-Login', loggedUserMiddleware, homeController.showPaginaLogin)
router.post('/Pagina-Login', homeController.loginProcess)
router.get('/painelDoUsuario', notLoggedUserMiddleware, homeController.showPainelDoUsuario)
router.get('/logout', homeController.logout)

module.exports = router