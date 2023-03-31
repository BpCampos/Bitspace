const express = require('express')
const authController = require('../controllers/authController')

//midlewares
const upload = require('../middlewares/upload')
const isAdmin = require('../middlewares/isAdmin')

const router = express.Router()

router.get('/auth/lista-produtos', isAdmin, authController.showProdutos)
router.get('/auth/cadastro-produto', isAdmin, authController.showCadastroProduto)
router.post('/auth/cadastro-produto', upload.single('image'), authController.storeProduto)
router.get('/auth/alterar-produto/:id', isAdmin, authController.showAlterarProduto)
router.put('/auth/alterar-produto/:id/update', authController.alterarProduto)
router.delete('/auth/lista-produtos/:id/delete', authController.deleteProduto)

module.exports = router