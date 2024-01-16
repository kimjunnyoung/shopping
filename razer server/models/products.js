module.exports = function (sequelize, DataTypes) {
    const Product = sequelize.define('Product', {
        name: {
            type: DataTypes.STRING(20),
            allowNull: false
        },
        price: {
            type: DataTypes.INTEGER(20),
            allowNull: false
        },
        imageUrl: {
            type: DataTypes.STRING(500)
        },
        seller: {
            type: DataTypes.STRING(200),
            allowNull: false
        },
        description: {
            type: DataTypes.STRING(500),
            allowNull: false
        },
        mainDescription: {
            type: DataTypes.STRING(500),
            allowNull: false
        },
        category: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        subCategory: {
            type: DataTypes.STRING(50),
            allowNull: false
        }
    });

    Product.associate = function (models) {
        Product.hasMany(models.CartItem, {
            foreignKey: 'ProductId',
            as: 'cartItems'
        });
    };

    return Product;
}
