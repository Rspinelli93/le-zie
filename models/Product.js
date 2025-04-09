const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: true, 
        trim: true 
    },
    description: { 
        type: String,
        required: true, 
        trim: true 
    },
    categories: { 
        type: [String], 
        required: true,
        set: categories => categories.map(category => category.toUpperCase()) 
    },
    colors: {
        type: [String],
        set: colors => colors.map(color => color.toUpperCase())
    },
    size: {
        type: String, 
        required: true,
        trim: true,
    },
    images: {
        type: [String], // Array of image URLs or paths
        required: true
    },
    decade: {
        type: Number,
    },
    brand: {
        type: String,
        trim: true
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    discount: {
        type: Number,
        min: 0,
        max: 100,
        default: 0
    },
    season: {
        type: String,
        required: true
    },
    sold: {
        type: Boolean,
        default: false
    }
}, { timestamps: true });

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;

