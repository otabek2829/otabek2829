const mongoose = require('mongoose')
const orderSchema = mongoose.Schema({
        name:String,
        products:[
            {
                name: String,
                category: String,
                title: String,
                count: String,
                price: String,
            }
        ],
        date: {
            type: Date,
            default: Date.now()
        }
})
module.exports = mongoose.model('Order' , orderSchema)