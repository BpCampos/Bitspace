const { Product, Client } = require('../models')

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

    showListagemProduto: async (req, res) => {

        const { id } = req.params

        const produtos = await Product.findAll({
            where: {
                category_id: id
            }
        })

        res.render('Listagem-Produtos', { produtos })
    },

    showPaginaCadastro: (req, res) => {
        res.render('Pagina-Cadastro')
    },

    createCadastro: async (req, res) => {

        const { name, surname, cpf, rg, email, password, cep, street, number, complemento, neighborhood, city, uf } = req.body

        await Client.create({
            name, surname, cpf, rg, email, password, cep, street, number, complemento, neighborhood, city, uf
        })

        return res.redirect('/')
    },

    showPaginaLogin: (req, res) => {
        res.render('Pagina-Login')
    },

    showPainelDoUsuario: (req, res) => {
        res.render('painelDoUsuario')
    },
}

module.exports = homeController;