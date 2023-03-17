const { Category, Product } = require('../models')


const authController = {

    showCadastroProduto: async (req, res) => {
        const url = req.originalUrl;

        const categorias = await Category.findAll()

        return res.render('./auth/cadastro-produto', { url, categorias })
    },

    storeProduto: async (req, res) => {
        const { name, price, description, category } = req.body

        const image = `/image/${req.file.filename}`

        await Product.create({ name, price, image, description, category_id: category })

        return res.redirect('/auth/cadastro-produto')
    },

}

module.exports = authController