const express = require('express')
const homeController = require('../controllers/homeController')

const router = express.Router();

router.get('/', homeController.showHome)
router.get('/carrinho/:id', homeController.showCarrinho)
router.get('/detalhe-produto/:id', homeController.showDetalheProduto)
router.get('/finalizacao-da-compra', homeController.showFinalizacaoDaCompra)
router.get('/listagem-produtos/:id', homeController.showListagemProduto)
router.get('/pagina-cadastro', homeController.showPaginaCadastro)
/* router.post('/auth/Pagina-Cadastro', homeController.LoginCadastro) */
router.get('/pagina-login', homeController.showPaginaLogin)
router.get('/painel-do-usuario', homeController.showPainelDoUsuario)

module.exports = router