const express = require('express')
const router = express.Router()
const authenticateAdmin = require('../middlewares/authMiddlewares')

const { getProducts, getById, createProduct, deleteProduct, editProduct, reserveProduct } = require('../controllers/productController') // require each controller

router.get('/products', getProducts)
router.get('/products/:_id', getById)

router.use(authenticateAdmin)

router.post('/admin/create', createProduct) // Add a new item to the DB
router.put('/admin/edit/:_id', editProduct) // Edit a product from the DB
router.put('/admin/reserve/:_id', reserveProduct) // Mark a product as reserved
router.delete('/admin/delete/:_id', deleteProduct) // Delete a product from the DB

module.exports = router;