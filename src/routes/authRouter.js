const express = require('express')
const authController = require('../controllers/authController')

//midlewares
const upload = require('../middlewares/upload')

const router = express.Router()

router.get('/auth/lista-produtos', authController.showProdutos)
router.get('/auth/cadastro-produto', authController.showCadastroProduto)
router.post('/auth/cadastro-produto', upload.single('image'), authController.storeProduto)
router.delete('/auth/lista-produtos/:id/delete', authController.deleteProduto)

module.exports = router