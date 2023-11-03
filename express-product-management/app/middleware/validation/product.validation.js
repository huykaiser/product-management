const checkEmpty = (req, res, next) => {
    const { name, amount, price } = req.body;

    if(name && amount && price){
        next();
    }else{
        res.status(500).send('The Variables must have an available value!!!');
    }
};


module.exports = {
    checkEmpty,
};
