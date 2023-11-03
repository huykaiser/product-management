const logFeature = (req, res, next) => {
    console.log("Get the product list.");
    next();
};

const deleteLogger = (req, res, next) => {
    console.log("Delete Item.");
    next();
};

module.exports = {
    logFeature,
    deleteLogger
};
