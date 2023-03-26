const { Product, Client} = require('../models')

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
        return res.render('Pagina-Login');
        
    },

    loginProcess:(req,res) =>{
        let userToLogin = User.findUserByField('email',req.body.email);
        if(userToLogin){
            if(userToLogin.password === req.body.password){
                req.session.userLogged = userToLogin;
                return res.redirect('/painelDoUsuario');
            }
                return res.render('Pagina-Login',{
                    erros:{
                        email:{
                            msg:'A senha está inválida'
                        }
                    }})
            }
        return res.render('Pagina-Login',{
            erros:{
                email:{
                    msg:'Este email nao foi encontrado'
                }
            }
        })
    },

    showPainelDoUsuario: (req, res) => {
        res.render('painelDoUsuario')
        userLogged:req.session.userLogged
    },
    logout:(req,res)=>{
        req.session.destroy();
        return res.redirect('/');
    }
}

module.exports = homeController;