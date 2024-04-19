const Product = require('../models/productModels') 
const validateAll = require('../middleware/validation')

async function getProducts(req, res) {
    try {
        const products = await Product.find({});
        res.status(200).json(products);
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

async function getProductById(req, res) {
    try {
        const {id} = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product);
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

async function createProduct(req, res) {
    const { name, value, stock, description } = req.body;
    const Error = validateAll(name, value, stock, description);
    if (!Error) {
      const newProduct = await Product.create(req.body);
      return res.status(200).json(newProduct);
    }
    return res.status(400).json({ message: Error });
}

async function updateProduct(req, res) {
    try {
        const { name, value, stock, description } = req.body;
        const Error = validateAll(name, value, stock, description);
        if (Error) return res.status(400).json({ message: Error });
        else {
            const {id} = req.params;
            const product = await Product
                .findByIdAndUpdate(id, req
                .body, {new: true});
            res.status(200).json(product);
        }
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}
async function deleteProduct(req, res) {
    try {
        const {id} = req.params;
        const product = await Product.findByIdAndDelete(id);
        res.status(200).json(product);
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

module.exports = {
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
}