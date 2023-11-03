const { Sequelize } = require("sequelize");
const { createProductModel } = require("./product.modal");

const { DB, HOST, PASSWORD, dialect, USER } = require("../config/db.config");

const sequelize = new Sequelize(DB, USER, PASSWORD, {
    host: HOST,
    dialect: dialect,
});

const Product = createProductModel(sequelize);

module.exports = {
    sequelize,
    Product
};
