const productModels = require('../models/productModels');

async function checkUpdateNameProduct(req, res, next) {
    const { id } = req.params;
    const { name } = req.body;
    const products = await productModels.find({});
    const product = products.find(product => product.name === name);
    const productById = products.find(product => product._id == id);
    if (product && productById.name !== name) {
        return res.status(400).json({ message: 'Product already exists' });
    }
    next();
}

module.exports = checkUpdateNameProduct;