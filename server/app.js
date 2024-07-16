require("dotenv").config()
const express = require('express');
const app = express();
const cors = require("cors");
require("./db/conn");
const router = require("./Routes/router");
const PORT = process.env.PORT || 6200;


app.use(cors());
app.use(express.json());

app.use(router);

app.listen(PORT,()=>{
    console.log("server start");
})

// app.get("/",(req,res)=>{
//     res.download("./myResume.pdf")
// })

app.get("/",(req,res)=>{
    res.download("./resume-Asmita Bhinge.pdf")
})