const { Product } = require('../model/index');

// let productList = [
//     {
//         id: 1,
//         name: "green tea",
//         amount: 25,
//         price: 10,
//         sale: false,
//     },
//     {
//         id: 2,
//         name: "black tea",
//         amount: 15,
//         price: 10,
//         sale: false,
//     },
//     {
//         id: 3,
//         name: "oolong",
//         amount: 10,
//         price: 15,
//         sale: true,
//     },
// ];

const getList = async () => {
    const productList = await Product.findAll();

    if (productList) {
        return productList;
    }else{
        return false;
    }   
};

const getItem = async (id) => {
    const item =  await Product.findOne({
        where: { 
            id: id
        }
    });

    if(item){
        return item;
    }else{
        return false;
    }
};

const addItem = async (item) => {
    const newItem = await Product.create(item);

    return newItem;
};

const update = async (id, item) => {
    const productUpdate = await getItem(id);

    if(productUpdate){
        productUpdate.name = item.name;
        productUpdate.amount = item.amount;
        productUpdate.price = item.price;
        productUpdate.sale = item.sale;

        const productUpdated = await productUpdate.save();

        return productUpdated;
    }else{
        return false;
    }
};

const deleteItem = async (id) => {
    const deleteProduct = await getItem(id);

    if(deleteProduct){
        await Product.destroy({
            where:{
                id
            }
        })
        
        return deleteProduct;
    }else{
        return false;
    }
};

module.exports = {
    getList,
    getItem,
    addItem,
    update,
    deleteItem
};

