const { Category, Product } = require('../models')


const authController = {

    showProdutos: async (req, res) => {
        const produtos = await Product.findAll()

        res.render('./auth/lista-produtos', { produtos })

    },

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

    showAlterarProduto: async (req, res) => {
        const { id } = req.params

        const produto = await Product.findByPk(id)

        const categorias = await Category.findAll()

        return res.render('./auth/alterar-produto', { categorias, produto })
    },

    alterarProduto: async (req, res) => {
        const { id } = req.params

        const { name, price, description, category } = req.body

        await Product.update({
            name,
            price,
            description,
            category
        }, {
            where: {
                id: id
            }
        })

        return res.redirect('/auth/lista-produtos')
    },

    deleteProduto: async (req, res) => {

        const { id } = req.params

        await Product.destroy({ where: { id } })

        return res.redirect('/lista-produtos')
    }

}

module.exports = authController