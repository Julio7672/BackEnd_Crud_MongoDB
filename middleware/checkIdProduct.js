const Product = require('../models/productModels');

const checkIdProduct = async(req, res, next) => {
    const { id } = req.params;
    const products = await Product.find({});
    const product = products.find(product => product._id == id);
    if (!product){
        return res.status(404).json({ message: 'Product not found' });
    }
    next();
}

module.exports = checkIdProduct;