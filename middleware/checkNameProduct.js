const Product = require('../models/productModels');

async function checkNameExist(req, res, next) {
    const { name } = req.body;
    const products = await Product.find({});
    const product = products.find(product => product.name === name);
    if (product){
        return res.status(400).json({ message: 'Product already exists' });
    }
    next();
}

  module.exports = checkNameExist;