const { getList, getItem, addItem, update, deleteItem } = require('../service/product.service');


const getProductList = async (req, res) => {
    const productList = await getList();

    if(productList){
        res.status(200).send(productList);
    }else{
        res.status(404).send("Not Found");
    }
};

const getProductById = async (req, res) => {
    const { id } = req.params;
    const item = await getItem(id);

    if(item){
        res.status(200).send(item);
    }else{
        res.status(404).send('Not Found!!!');
    }
};

const addProduct = async (req, res) => {
    const item = req.body;

    const newItem = await addItem(item);

    res.status(201).send(newItem);
};

const updateProduct = async (req, res) => {
    const { id } = req.params;
    // const { name, amount, price, sale } = req.body;
    const item = req.body;

    const updateItem = await update(id, item);

    if(updateItem){
        res.status(200).send(updateItem);
    }else{
        res.status(404).send('Not Found!!!');
    }
};

const deleteProduct = async (req, res) => {
    const { id } = req.params;
    const item =  await deleteItem(id);

    if(item){
        res.status(200).send(item);
    }else{
        res.status(404).send('Not Found!!!');
    }
};

module.exports = {
    getProductList,
    getProductById,
    addProduct,
    updateProduct,
    deleteProduct
};

