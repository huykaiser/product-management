const express = require('express');
const cors = require('cors');
const { getProductList, getProductById, addProduct, updateProduct, deleteProduct } = require('../controller/product.controller')
const { logFeature, deleteLogger } = require('../middleware/logger/logger');
const { checkEmpty } = require('../middleware/validation/product.validation');

const productRouter = express.Router();

productRouter.use(express.json());

// get product list
productRouter.get('/', logFeature, getProductList);

// get product item by id
productRouter.get('/:id', getProductById);

// add item
productRouter.post('/', cors(), (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  }, checkEmpty, addProduct);

// update item by id
productRouter.put('/:id', updateProduct);

// delete item by id
productRouter.delete('/:id', deleteLogger, deleteProduct);

module.exports = productRouter;
