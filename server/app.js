require("dotenv").config()
const express = require('express');
const app = express();
const cors = require("cors");
require("./db/conn");
const router = require("./Routes/router");
const port = process.env.port || 6200;


app.use(cors());
app.use(express.json());

app.use(router);

app.listen(port,()=>{
    console.log("server start");
})

app.get("/",(req,res)=>{
    res.download("./resume1.pdf")
})