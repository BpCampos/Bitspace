module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define('Product', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: DataTypes.DOUBLE,
            allowNull: false
        },
        image: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        description: {
            type: DataTypes.STRING(500),
            allowNull: false
        },
        category_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {
        tableName: 'products',
        timestamps: true
    })

    Product.associate = (models) => {
        Product.belongsTo(models.Category, {
            foreignKey: 'category_id',
            as: 'category'
        })
    }

    Product.associate = (models) => {
        Product.belongsToMany(models.Sale, {
            as: 'sale',
            through: 'sales_has_products',
            foreignKey: 'productId',
            otherKey: 'saleId'
        })
    }

    return Product
}