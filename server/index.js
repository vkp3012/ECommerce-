const express = require("express");
const cors = require("cors")
// const mongoose = require("mongoose")
require("./db/configs.js")
const User = require("./db/User.js")
const Product = require("./db/Product.js");
const jwt = require("jsonwebtoken");
const jwtKey = "e-comm"

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
    jwt.sign(
        {result},
        jwtKey,
        {expiresIn : "24h"},
        (err,token) => {
            if(err){
                res.send({result : "Something went Wrong, Please After some time.."})
            }
            res.send({ result, auth : token})
        }
    )
})

app.post("/login",async (req,res)=>{
    if(req.body.email && req.body.password){
        let user = await User.findOne(req.body).select("-password")
        if(user){
            jwt.sign(
                {user},
                jwtKey,
                {expiresIn: "24h"},
                (err,token) => {
                    if(err){
                        res.send({result : "Something went Wrong, Please After some time.."})
                    }
                    res.send({ user, auth : token})
                }
            )
        }else{
            res.send({result : "No User Found"})
        }
    }else{
        res.send({result : "please enter your password"})
    }    
})

app.post("/add-product", verifyToken, async(req,res)=>{
    let product = new Product(req.body)
    let result = await product.save();
    res.send(result)
})

app.get("/products",verifyToken, async (req,res)=>{
    let products = await Product.find();
    if(products.length > 0){
        res.send(products)
    }else{
        res.send({result : "No Product Found"})
    }
})

app.delete("/product/:id",verifyToken,async(req,res)=>{
    const result = await Product.deleteOne({_id:req.params.id})
    res.send(result)
})

app.get("/product/:id",verifyToken,async (req,res)=>{
    let result = await Product.findOne({_id:req.params.id});
    if(result){
        res.send(result)
    }else{
        res.send({result:"No Product Found"})
    }
})

app.put("/product/:id",verifyToken,async (req,res)=>{
    let result = await Product.updateOne(
        { _id : req.params.id},
        {
            $set : req.body
        }
    )
    res.send(result)
})

app.get("/search/:key",verifyToken,async (req,res)=>{
    let result = await Product.find({
        "$or" : [
            {name : {$regex : req.params.key}},
            {company : {$regex : req.params.key}},
            {category : {$regex : req.params.key}}
        ]
    })
    res.send(result)
})

function verifyToken(req,res,next){
    let token = req.headers['authorization']
    if(token){
        token = token.split(" ")[1];
        // console.log("middleWare called if",token);
        jwt.verify(token,jwtKey,(err,valid)=>{
            if(err){
                res.status(401).send({ result : "Please provide valid token"})
            }else{
                next();
            }
        })
    }else{
        res.send({ result : "Please add token with headers"})
    }
    // console.log("middleware called",token);
    // next();
}

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