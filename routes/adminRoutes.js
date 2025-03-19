const express = require('express')
const router = express.Router()

const { login, logout, register } = require('../controllers/adminController')

router.post('/admin/login', login)
router.post('/admin/register', register)
router.delete('/admin/logout', logout)

module.exports = router