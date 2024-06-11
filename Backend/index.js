const express = require("express");
const app = express();
require('dotenv').config();


console.log(process.env.PORT)


app.listen(process.env.PORT ,()=>{
    console.log(`this server runing  on the port localhost:${process.env.PORT}`)
})









// app.listen(5000,()=>{
//     console.log( "server is runig on port 5000")
// });