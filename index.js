const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const appRouter = require('./router')

app.use(express.json())
app.use(cors())


mongoose.connect('mongodb://localhost/rassiya' ,
    {
        useNewUrlParser:true ,
     useUnifiedTopology:true}
)
.then(() => {
    console.log('Bazaga ulandi')
})
.catch((err)=> {
    console.log('Bazaa ulanishda hato')
})


app.use('/' , appRouter)

const port = process.env.PORT || 5000

app.listen(port , () => {
    console.log(`${port}chi port ishga tushdi`)
})



