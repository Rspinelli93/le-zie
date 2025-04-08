const express = require('express')
const router = express.Router()
const authenticateAdmin = require('../middlewares/authMiddlewares')

const { getProducts, getById, createProduct, deleteProduct, editProduct, soldProduct } = require('../controllers/productController') // require each controller

router.get('/products', getProducts)  
router.get('/products/:_id', getById)

router.get('/admin/products', authenticateAdmin, getProducts)
router.get('/products/:_id', authenticateAdmin, getById)
router.post('/admin/create', authenticateAdmin, createProduct) // Add a new item to the DB
router.put('/admin/edit/:_id', authenticateAdmin, editProduct) // Edit a product from the DB
router.put('/admin/reserve/:_id', authenticateAdmin, soldProduct) // Mark a product as reserved
router.delete('/admin/delete/:_id', authenticateAdmin, deleteProduct) // Delete a product from the DB

module.exports = router;

