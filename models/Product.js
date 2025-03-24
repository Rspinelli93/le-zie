const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, trim: true },
    categories: { 
        type: [String], 
        required: true,
        set: categories => categories.map(category => category.toUpperCase()) 
    },
    size: {
        type: String,
        set: size => size ? size.toUpperCase() : size
    },
    image: { type: String, required: true }, 
    price: { type: Number },
    reserved: { type: Boolean, default: false },
}, { timestamps: true });

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;
