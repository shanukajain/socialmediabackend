const express=require("express");
const userrouter=express.Router();
const bcrypt=require("bcrypt");
var jwt = require('jsonwebtoken');
const { Usermodel } = require("../models/userModel");
userrouter.use(express.json());
require("dotenv").config();
let key=process.env.key
userrouter.post("/register",async(req,res)=>{
try {
    let payload=req.body;
    bcrypt.hash(payload.password, 5,async function(err, hash) {
        // Store hash in your password DB.
        payload.password=hash;
       let data=new Usermodel(payload);
       await data.save(); 
    });
    let data=await Usermodel.find();
    res.send(data);
} catch (error) {
    console.log(error);
}
})
userrouter.post("/login",async(req,res)=>{
    console.log(req.body)
    let {email,password}=req.body;
    let data=await Usermodel.findOne({"email":email});
    console.log(data)
    bcrypt.compare(password, data.password).then(function(result) {
    if(result){
var token = jwt.sign({ userId:data._id }, key);
res.send({"msg":"done","token":token})
    }
    });
    // res.send("done");
})


module.exports={
    userrouter
}