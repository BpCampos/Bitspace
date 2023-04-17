const { Product, Client, Sale, Admin } = require('../models')
const bcrypt = require('bcrypt');
const { Op } = require('sequelize');


const homeController = {

    showHome: async (req, res) => {

        const produtos = await Product.findAll()

        res.render('home', { produtos })
    },

    searchProduct: async (req, res) => {

        const { search } = req.query

        console.log(search)

        const produtos = await Product.findAll({
            where: {
                name: {
                    [Op.like]: `%${search}%`
                }
            }
        })

        res.render('Listagem-Produtos', { produtos })
    },

    showCarrinho: async (req, res) => {

        const { id } = req.params

        const produto = await Product.findByPk(id)

        res.render('carrinho', { produto })
    },

    carrinhoInfo: async (req, res) => {
        const { id } = req.params

        const produtoInfo = await Product.findByPk(id)

        if (produtoInfo) {
            req.session.produto = [produtoInfo]
        }

        let produtos = [...req.session.produto]

        res.render('carrinho', { produtos, produtoInfo })
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
        res.render('Pagina-Cadastro', { errors: false });

    },

    createCadastro: async (req, res) => {

        const hashedPassword = bcrypt.hashSync(req.body.password, 12);

        if (await Client.findOne({ where: { email: req.body.email, password: bcrypt.compareSync(req.body.password, hashedPassword) } })) {

            const { name, surname, cpf, rg, email, cep, street, number, complemento, neighborhood, city, uf } = req.body;

            await Client.create({
                name, surname, cpf, rg, email, password: hashedPassword, cep, street, number, complemento, neighborhood, city, uf
            })
            return res.redirect('/Pagina-Login')

        }

        res.render('/Pagina-Cadastro', { errors: { msg: "Email ou senha já cadastrados" } })


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
                email: email
            }
        })

        let userToLogin = await Client.findOne({
            where: {
                email: email
            }
        });

        if (userAdmin && bcrypt.compareSync(password, userAdmin.password)) {
            delete userAdmin.password
            req.session.adminLogged = userAdmin


            if (req.body.remember_user) {
                res.cookie('userEmail', req.body.email, { maxAge: (1000) * 60 * 30 });
            }

            return res.redirect('/painelDoUsuario')

        }

        if (userToLogin && bcrypt.compareSync(password, userToLogin.password)) {
            delete userToLogin.password
            req.session.userLogged = userToLogin

            if (req.body.remember_user) {
                res.cookie('userEmail', req.body.email, { maxAge: (1000) * 60 * 30 });
            }

            return res.redirect('/painelDoUsuario')
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