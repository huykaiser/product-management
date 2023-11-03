const { DataTypes } = require('sequelize');

// create table Product
const createProductModel = (sequelize) => {
    return sequelize.define(
        'Product',
        {
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            amount: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            price: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            sale: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
            },
        }, {
        tableName: 'products',
        timestamps: true,
    });
};

module.exports = {
    createProductModel,
};
