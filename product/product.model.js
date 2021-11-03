const mongoose = require('mongoose')
const productSchema = mongoose.Schema({
        name:String,
        title: String,
        byPrice :String,
        sellPrice : String,
        category: String,
        date: {
            type: Date,
            default: Date.now()
        }
})
module.exports = mongoose.model('Product' , productSchema)