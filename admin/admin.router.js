const express = require('express')
const router = express.Router()
const adminController = require('./admin.controller')


//http://localhost:5000/admin
router.route('/').post(adminController.addAdmin)


module.exports = router