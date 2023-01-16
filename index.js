const express=require("express");
const app=express();
const cors=require("cors");
const { connection } = require("./config/db");
const { userrouter } = require("./router/user");
const { postrouter } = require("./router/post");
app.use(cors());
app.use(express.json());
require("dotenv").config();
const port=process.env.port;
app.get("/",(req,res)=>{
    res.send("home page");
})
app.use("/users",userrouter);
app.use("/posts",postrouter);





app.listen(port,async()=>{
    try {
        await connection;
        console.log("connected at port ",port)
    } catch (error) {
        
    }
})