module.exports = (sequelize, DataTypes) => {
    const Client = sequelize.define('Client', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        nome: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        sobrenome: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        senha: {
            type: DataTypes.STRING(250),
            allowNull: false
        },
        cpf: {
            type: DataTypes.STRING(250),
            allowNull: false
        },
        rg: {
            type: DataTypes.INTEGER(14),
            allowNull: false
        },
        email: {
            type: DataTypes.STRING(250),
            allowNull: false
        },
        cep: {
            type: DataTypes.INTEGER(50),
            allowNull: false
        },
        complemento: {
            type: DataTypes.INTEGER(250),
            allowNull: false
        },
        bairro: {
            type: DataTypes.INTEGER(250),
            allowNull: false
        },
        localidade: {
            type: DataTypes.INTEGER(250),
            allowNull: false
        },
        uf: {
            type: DataTypes.STRING(5),
            allowNull: false
        }

    }, {
        tableName: 'clients',
        timestamps: true
    });

    return Client
}