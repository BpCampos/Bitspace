const { Product, Client, Sale, Admin } = require('../models')


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

    saleInfo: async (req, res) => {

        const { id } = req.params

        const produto = await Product.findByPk(id)

        if (produto) {
            req.session.sale = produto
        }

        return res.render('finalizacaoDaCompra', { sale: req.session.sale, userLogged: req.session.userLogged })

    },

    showDetalheProduto: async (req, res) => {

        const { id } = req.params

        const produto = await Product.findByPk(id)

        res.render('detalhe-produto', { produto })
    },

    showFinalizacaoDaCompra: async (req, res) => {

        res.render('finalizacaoDaCompra', { sale: req.session.sale, userlogged: req.session.userLogged })
    },

    createSale: async (req, res) => {

        await Sale.create({ total: req.session.sale.price, clients_id: req.session.userLogged.id })

        return res.redirect('/')

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

    showPaginaCadastroAdmin: async (req, res) => {

        return res.render('Pagina-Cadastro-Admin')
    },

    createAdmin: async (req, res) => {

        const { name, email, password } = req.body

        await Admin.create({ name, email, password, isAdmin: true })

        return res.redirect('/Pagina-Login')

    },

    showPaginaLogin: (req, res) => {

        return res.render('Pagina-Login', { errors: undefined });

    },

    loginProcess: async (req, res) => {

        const { email, password } = req.body

        let userAdmin = await Admin.findOne({
            where: {
                email: email,
                password: password
            }
        })

        let userToLogin = await Client.findOne({
            where: {
                email: email,
                password: password
            }
        });

        if (userAdmin) {
            delete userAdmin.password
            req.session.adminLogged = userAdmin


            if (req.body.remember_user) {
                res.cookie('userEmail', req.body.email, { maxAge: (1000) * 60 * 30 });
            }

            return res.render('painelDoUsuario', { adminLogged: req.session.adminLogged })

        }

        if (userToLogin) {
            delete userToLogin.password
            req.session.userLogged = userToLogin

            if (req.body.remember_user) {
                res.cookie('userEmail', req.body.email, { maxAge: (1000) * 60 * 30 });
            }

            return res.render('painelDoUsuario', { userLogged: req.session.userLogged, adminLogged: false })
        }

        return res.render('Pagina-Login', { errors: { msg: "Email ou senha inválidos" } })
    },

    showPainelDoUsuario: (req, res) => {

        res.render('painelDoUsuario', { userLogged: req.session.userLogged, adminLogged: req.session.adminLogged })

    },
    logout: (req, res) => {

        req.session.destroy();
        res.clearCookie("userEmail")

        return res.redirect('/');
    }
}

module.exports = homeController;