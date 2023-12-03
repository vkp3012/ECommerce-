const express = require("express");

const app = express()
const port = 5000

app.get("/",(req,res)=>{
    res.send("app is working...")
})

app.listen(port)