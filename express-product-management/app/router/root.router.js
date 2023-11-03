const express = require('express');
const productRouter = require('../router/product.router');

const router = express.Router();

router.use('/products', productRouter);

module.exports = router;
