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
            return res.status(404).json({ message: "Product not found 🔍" });
        }
        res.status(200).json(product);

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "There was a problem getting this product" });
    }
};
const createProduct = async(req, res) => {
    try {
        const product = await Product.create({ 
            name: req.body.name, 
            description: req.body.description,
            categories: req.body.categories,
            colors: req.body.colors,
            size: req.body.size,
            images: req.body.images,
            decade: req.body.decade,
            brand: req.body.brand,
            price: req.body.price,
            discount: req.body.discount,
            season: req.body.season,
            sold: req.body.sold
        });
        if (!product) {
            return res.status(400).json({ message: "Product not created" });
        }
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
const soldProduct = async (req, res) => {
    try {
        const id = req.params._id;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: "Invalid Product ID" });
        }

        const product = await Product.findById(id);
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }

        product.sold = !product.sold;
        await product.save();
        res.status(200).json(product);
        
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "There was a problem marking the product as sold" });
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
    soldProduct
}