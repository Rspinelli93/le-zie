const express = require('express')
const router = express.Router()

const { getAdmin } = require('../controllers/adminController')

router.post('/admin/login', getAdmin)

module.exports = router