const Product =require('./product.model')

async function addProduct(req,res) {
    try {
        const product =  await Product.create(req.body)
        console.log(req.body)
        res.status(200).send(product)
    } catch(err){
        console.log(err)
        return res.status(400).send(err)
    }
}

async function  getProduct(req , res) {
    try {
        const productList = await Product.find({})
        return res.status(200).json(productList)
    } catch (err){
        return res.status(400).send(err)
    }
}


async function deleteProduct(req , res ) {
    try {
        const id = req.params.id
        await Product.findByIdAndDelete(id)
        return res.status(200).json('Malumot o\'chirib yuborildi')
    } catch (err){
        return res.status(400).send(err)
    }
}

async function updateProduct(req , res ) {
    try {
        const id = req.params.id
        await Product.findByIdAndUpdate(id , req.body)
        return res.status(200).json('Malumot yangilandi yuborildi')
    } catch (err){
        return res.status(400).send(err)
    }
}



module.exports = {
    addProduct,
    getProduct,
    deleteProduct,
    updateProduct
}

