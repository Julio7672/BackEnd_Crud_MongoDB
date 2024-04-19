const express = require('express')
const mongoose = require('mongoose')
const productRouter = require('./routes/productRoute')
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/Products', productRouter)

mongoose.set("strictQuery", false)
mongoose.
connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.vjq347y.mongodb.net/`)
.then(() => {
    app.listen(3000, ()=> {
        console.log(`Node API app is running on port 3000`)
    });
}).catch((error) => {
    console.log(error)
})