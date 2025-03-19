const Product = require("../models/Product"); 
const mongoose = require("mongoose");

const getProducts = async ( req, res ) => {
    try {
        const products = await Product.find();
        res.status(200).json(products); 
    } catch (error) {
        console.error(error);
        res
            .status(500)
            .json({ message: "There was a problem getting the products" });
    }
};
const getById = async (req, res) => {
    try {
        const id = req.params._id; 
        const product = await Product.findById(id);

        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.status(200).json(product);

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "There was a problem getting this product" });
    }
};
const createProduct = async(req, res) => {
    try {
        const product = await Product.create(
            { 
            name: req.body.name, 
            description: req.body.description,
            categories: req.body.categories,
            sizeType: req.body.sizeType,
            size: req.body.size,
            image: req.body.image,
            precio: req.body.precio
            }
        );
        await product.save();
        res.status(201).json(product);
    } catch (error) {
        console.error(error);
        res
            .status(500)
            .send({ message: "There was a problem creating this product" });
    }
};
const editProduct = async (req, res) => {
    try {
        const id = req.params._id; 
        
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: "Invalid Product ID" });
        }

        const productUpdated = await Product.findByIdAndUpdate(
            id,
            req.body,
            { new: true, runValidators: true }
        );

        if (!productUpdated) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.status(200).json(productUpdated);
        
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "There was a problem updating the product" });
    }
};
const reserveProduct = async (req, res) => {
    try {
        const id = req.params._id;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: "Invalid Product ID" });
        }

        const product = await Product.findById(id);
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }

        product.reserved = !product.reserved;
        await product.save();
        res.status(200).json(product);
        
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "There was a problem reserving the product" });
    }
};
const deleteProduct = async (req, res) => {
    try {
        const id = req.params._id;
        const deletedProduct = await Product.deleteOne({ _id: id });

        if (deletedProduct.deletedCount === 0) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.status(200).json(deletedProduct);

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "There was a problem deleting the Product" });
    }
};

module.exports = {
    getProducts,
    getById,
    createProduct,
    deleteProduct,
    editProduct,
    reserveProduct
}