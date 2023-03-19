const { Product } = require('../models')

const homeController = {

    showHome: async (req, res) => {

        const produtos = await Product.findAll()

        res.render('home', { produtos })
    },

    showCarrinho: async (req, res) => {

        const { id } = req.params

        const produto = await Product.findByPk(id)

        res.render('carrinho', { produto })
    },

    showDetalheProduto: async (req, res) => {

        const { id } = req.params

        const produto = await Product.findByPk(id)

        res.render('detalhe-produto', { produto })
    },

    showFinalizacaoDaCompra: (req, res) => {
        res.render('finalizaçãoDaCompra')
    },

    showListagemProduto: (req, res) => {
        res.render('Listagem-Produtos')
    },

    showPaginaCadastro: (req, res) => {
        res.render('Pagina-Cadastro')
    },

    showPaginaLogin: (req, res) => {
        res.render('Pagina-Login')
    },

    showPainelDoUsuario: (req, res) => {
        res.render('painelDoUsuario')
    },
}

module.exports = homeController;