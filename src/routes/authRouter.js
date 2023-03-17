const express = require('express')
const authController = require('../controllers/authController')

//midlewares
const upload = require('../middlewares/upload')

const router = express.Router()

router.get('/auth/cadastro-produto', authController.showCadastroProduto)
router.post('/auth/cadastro-produto', upload.single('image'), authController.storeProduto)

module.exports = router