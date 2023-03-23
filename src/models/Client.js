

module.exports = (sequelize, DataTypes) => {
    const Client = sequelize.define('Client', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        surname: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        password: {
            type: DataTypes.STRING(250),
            allowNull: false
        },
        cpf: {
            type: DataTypes.INTEGER(50),
            allowNull: false
        },
        rg: {
            type: DataTypes.STRING(250),
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
        street: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        number: {
            type: DataTypes.INTEGER(255),
            allowNull: false
        },
        complemento: {
            type: DataTypes.INTEGER(250),
            allowNull: false
        },
        neighborhood: {
            type: DataTypes.INTEGER(250),
            allowNull: false
        },
        city: {
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