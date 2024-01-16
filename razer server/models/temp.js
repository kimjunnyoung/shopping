module.exports = function (sequelize, DataTypes) {
    const Temp = sequelize.define('Temp', {
        name: {
            type: DataTypes.STRING(20),
            allowNull: false
        },
        price: {
            type: DataTypes.INTEGER(20),
            allowNull: false
        }
    });

    return Temp;
}
