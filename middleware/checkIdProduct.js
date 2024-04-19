const Product = require('../models/productModels');

const checkIdProduct = async(req, res, next) => {
    const { id } = req.params;
    const product = await Product
        .findById(id)
        .catch(err => {
            return res.status(500).json({ message: err.message });
        });
    if (!product) {
        return res.status(404).json({ message: 'Product not found' });
    }
    next();
}

module.exports = checkIdProduct;