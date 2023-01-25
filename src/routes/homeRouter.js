const express = require('express')
const homeController = require('../controllers/homeController')

const router = express.Router();

router.get('/', homeController.showHome)
router.get('/carrinho', homeController.showCarrinho)
router.get('/detalhe-produto', homeController.showDetalheProduto)
router.get('/finalizacao-da-compra', homeController.showFinalizacaoDaCompra)
router.get('/listagem-produtos', homeController.showListagemProduto)
router.get('/pagina-cadastro', homeController.showPaginaCadastro)
router.get('/pagina-login', homeController.showPaginaLogin)
router.get('/painel-do-usuario', homeController.showPainelDoUsuario)

module.exports = router