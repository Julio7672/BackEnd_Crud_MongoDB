const  { createProduct, updateProduct, deleteProduct, getProducts, getProductById }  = require('../controllers/productControllers');
const checkNameExist = require('../middleware/checkNameProduct');
const checkEmptyDatabase = require('../middleware/checkEmptyDatabase');
const checkIdProduct = require('../middleware/checkIdProduct');
const checkUpdateNameProduct = require('../middleware/checkUpdateNameProduct');
const { checkName, checkValue, checkStock, checkDescription } = require('../middleware/inputValidation');

const productRouter = require('express').Router();

productRouter.get('/', checkEmptyDatabase, getProducts);

productRouter.get('/:id', checkEmptyDatabase, checkIdProduct, getProductById);

productRouter.post(
    '/',
    checkNameExist,
    checkName,
    checkValue,
    checkStock,
    checkDescription,
    createProduct
);

productRouter.put(
    '/:id',
    checkEmptyDatabase,
    checkIdProduct,
    checkUpdateNameProduct,
    checkName,
    checkValue,
    checkStock,
    checkDescription,
    updateProduct
);

productRouter.delete('/:id', checkEmptyDatabase, checkIdProduct, deleteProduct);

module.exports = productRouter;