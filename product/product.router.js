const express = require('express')
const router = express.Router()
const productController = require('./product.controller')

//http://localhost:5000/product
router.route('/').get(productController.getProduct)

//http://localhost:5000/product
router.route('/').post(productController.addProduct)

router.route('/:id').patch(productController.updateProduct)

//http://localhost:5000/product/:product_id
router.route('/:id').delete(productController.deleteProduct)

module.exports = router