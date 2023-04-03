module.exports = (sequelize, DataTypes) => {
    const ProductSale = sequelize.define('ProductSale', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        }
    }, {
        tableName: 'sales_has_products',
        timestamps: true
    })

    return ProductSale
}