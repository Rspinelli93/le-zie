const express = require('express')
const router = express.Router()
const authenticateAdmin = require('../middlewares/authMiddlewares')

const { getProducts, getById, createProduct, deleteProduct, editProduct, soldProduct } = require('../controllers/productController') // require each controller

router.get('/products', getProducts)  
router.get('/products/:_id', getById)

router.post('/admin/create', authenticateAdmin, createProduct)
router.put('/admin/edit/:_id', authenticateAdmin, editProduct)
router.put('/admin/sold/:_id', authenticateAdmin, soldProduct)
router.delete('/admin/delete/:_id', authenticateAdmin, deleteProduct)

module.exports = router;

