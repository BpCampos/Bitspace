const { Product } = require('../models')

const homeController = {

    showHome: async (req, res) => {

        const produtos = await Product.findAll()

        res.render('home', { produtos })
    },

    showCarrinho: (req, res) => {
        res.render('carrinho')
    },

    showDetalheProduto: (req, res) => {
        res.render('detalhe-produto')
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