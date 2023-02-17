module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define(
        "User",
        {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
            },
            name: {
                type: DataTypes.STRING, // STRING() -> 255
                allowNull: false,
            },
            email: {
                type: DataTypes.STRING(100), // STRING() -> 100
                allowNull: true,
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        },
        { tablename: "users" }
    );

    return User;
};