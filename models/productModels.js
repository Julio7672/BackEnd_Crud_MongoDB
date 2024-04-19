const mongoose = require('mongoose')

const productSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            allowNull: false,
            unique: true,
        },
        description: {
            type: String,
            required: false,
            allowNull: true,
        },
        value : {
            type: Number,
            required: true,
            allowNull: false,
        },
        stock: {
            type: Number,
            required: true,
            allowNull: false,
        },
    },
    {
        timestamps: true
    }
)


const Product = mongoose.model('Product', productSchema);

module.exports = Product;