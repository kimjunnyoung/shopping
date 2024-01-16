module.exports = function (sequelize, DataTypes) {
    const CartItem = sequelize.define('CartItem', {
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
          },
        price: {
        type: DataTypes.FLOAT,
        allowNull: false
        },
    });

    CartItem.associate = function (models) {
        CartItem.belongsTo(models.Product, {
            foreignKey: 'ProductId',
            as: 'product'
        });
    };

    return CartItem;
}
