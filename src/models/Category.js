module.exports = (sequelize, DataTypes) => {
    const Category = sequelize.define('Category', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING(250),
            allowNull: false
        }
    }, {
        tableName: 'categories',
        timestamps: true
    });

    return Category
}