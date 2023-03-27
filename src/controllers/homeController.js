const { Product, Client } = require('../models')

const User = require('../models/User');

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
        res.render('finalizacaoDaCompra')
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
        res.render('Pagina-Cadastro');

    },

    createCadastro: async (req, res) => {

        const { name, surname, cpf, rg, email, password, cep, street, number, complemento, neighborhood, city, uf } = req.body;

        await Client.create({
            name, surname, cpf, rg, email, password, cep, street, number, complemento, neighborhood, city, uf
        })
        return res.redirect('/Pagina-Login')

    },

    showPaginaLogin: (req, res) => {
        return res.render('Pagina-Login', { errors: undefined });

    },

    loginProcess: async (req, res) => {

        const { email, password } = req.body

        let userToLogin = await Client.findOne({
            where: {
                email: email,
                password: password
            }
        });

        if (userToLogin) {
            delete userToLogin.password
            req.session.userLogged = userToLogin
            return res.render('painelDoUsuario', { userLogged: req.session.userLogged })
        }

        return res.render('Pagina-Login', { errors: { msg: "Email ou senha inválidos" } })
    },

    showPainelDoUsuario: (req, res) => {

        res.render('painelDoUsuario', { userLogged: req.session.userLogged })

    },
    logout: (req, res) => {
        req.session.destroy();
        return res.redirect('/');
    }
}

module.exports = homeController;