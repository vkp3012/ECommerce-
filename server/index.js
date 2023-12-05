const express = require("express");
const cors = require("cors")
// const mongoose = require("mongoose")
require("./db/configs.js")
const User = require("./db/User.js")
const Product = require("./db/Product.js");

const app = express()
const port = 5000
app.use(express.json());
app.use(cors())

app.post("/signup",async (req,res)=>{
    // res.send("api is progress")
    let user = new User(req.body);
    let result = await user.save();
    result = result.toObject();
    delete result.password;
    res.send(result)
})

app.post("/login",async (req,res)=>{
    if(req.body.email && req.body.password){
        let user = await User.findOne(req.body).select("-password")
        if(user){
            res.send(user)
        }else{
            res.send({result : "No User Found"})
        }
    }else{
        res.send({result : "please enter your password"})
    }    
})

app.post("/add-product", async(req,res)=>{
    let product = new Product(req.body)
    let result = await product.save();
    res.send(result)
})

app.get("/products",async (req,res)=>{
    let products = await Product.find();
    if(products.length > 0){
        res.send(products)
    }else{
        res.send({result : "No Product Found"})
    }
})

app.delete("/product/:id",async(req,res)=>{
    const result = await Product.deleteOne({_id:req.params.id})
    res.send(result)
})

// const connectDB = async () => {
//     const mongo = mongoose.connect("mongodb://127.0.0.1:27017/e-com");
//     console.log(mongo);
//     const productSchema = new mongoose.Schema({});
//     const product = mongoose.model('product',productSchema);
//     const data = await product.find();
//     console.log(data)
// }
// connectDB();

app.listen(port)