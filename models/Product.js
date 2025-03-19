const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, trim: true },
    categories: { 
        type: [String], //todo-  its an array to accept multiple categories
        required: true,
        enum: [
            'Tops', 'Pants', 'Shoes', 'Accessories', 
            'Jackets', 'Dresses', 'Shorts', 'Sweaters', 
            'Bags', 'Jewelry', 'Hats', 'Watches', 
            'Sportswear', 'Socks', 'Underwear'
        ]
    },
    sizeType: { type: String, enum: ['clothing', 'shoes', 'oneSize'], required: true },
    size: {
        type: String,
        required: function() { return this.sizeType !== 'oneSize'; }, 
        enum: [
            'XS', 'S', 'M', 'L', 'XL', 
            '36', '37', '38', '39', '40', '41', '42', '43', '44', 
            'One Size'
        ]
    },
    image: { type: String, required: true }, //The image URL should be stored in a cloud service like AWS S3, Cloudinary, or Firebase Storage
    price: { type: Number },
    reserved: { type: Boolean, default: false },
}, { timestamps: true });

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;