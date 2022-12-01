

const http = require("http")
const express = require("express")

// init middleware
const app = express();
const port = 3000;


app.get('/',(req, res)=>{
    res.send("hello world")
})
app.listen(port, ()=>{
    console.log(`example app listening on port ${port}`)
})
