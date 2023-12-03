const express = require("express");
const mongoose = require("mongoose")
const app = express()
const port = 5000
const connectDB = async () => {
    const mongo = mongoose.connect("mongodb://127.0.0.1:27017/e-com");
    console.log(mongo);
    const productSchema = new mongoose.Schema({});
    const product = mongoose.model('product',productSchema);
    const data = await product.find();
    console.log(data)
}

connectDB();
app.listen(port)