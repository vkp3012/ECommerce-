const express = require("express");
const cors = require("cors")
// const mongoose = require("mongoose")
require("./db/configs.js")
const User = require("./db/User.js")
const app = express()
const port = 5000
app.use(express.json());
app.use(cors())
app.post("/signup",async (req,res)=>{
    // res.send("api is progress")
    let user = new User(req.body);
    let result = await user.save();
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