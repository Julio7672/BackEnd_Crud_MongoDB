const productModel = require('../models/productModels');

const checkEmptyDatabase = async (req, res, next) => {
    const products = await productModel.find({});
    if (products.length === 0) {
        return res.status(400).json({ message: 'products list is empty' });
    }
    next();
};

module.exports = checkEmptyDatabase;