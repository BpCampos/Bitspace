module.exports = (sequelize, DataTypes) => {
    const Sale = sequelize.define('Sale', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        total: {
            type: DataTypes.DOUBLE,
            allowNull: false
        },
        client_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {
        tableName: 'sales',
        timestamps: true
    })


    Sale.associate = (models) => {
        Sale.belongsTo(models.Cliente, {
            foreignKey: 'clients_id',
            as: 'client'
        })
    }


    Sale.associate = (models) => {
        Sale.belongsToMany(models.Product, {
            as: 'product',
            through: 'sales_has_products',
            foreignKey: 'saleId',
            otherKey: 'productId'
        })
    }

    return Sale
}