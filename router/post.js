const express=require("express");
const { authantication } = require("../middleware/authantcation");
const { Postmodel } = require("../models/postModel");
const postrouter=express.Router();
postrouter.use(express.json());



postrouter.delete("/delete/:id",async(req,res)=>{
    try {
        let id=req.params.id
        console.log(id)
            await Postmodel.deleteMany({_id:id});
            res.send({"msg":"done"})
    } catch (error) {
        console.log(error)
    }
   
})
postrouter.patch("/update/:id",async(req,res)=>{
    let id=req.params.id
        let change=req.body;
        console.log(change)
        await Postmodel.updateMany({_id:id},change);
        res.send({"msg":"done"})
    }
)
postrouter.use(authantication)
postrouter.get("/",async(req,res)=>{
   let data
    if(req.query.device){
        console.log("no")
        let l=req.query.device
        console.log(l)
        data=await Postmodel.find({"device":l,"userID":req.body.userID});
        res.send(data);
    }else if(req.query.device1){
        console.log("yes")
        console.log(req.query);
        let l=req.query.device1
       
       let data2=await Postmodel.find({"device":l,"userID":req.body.userID});
       l=req.query["device2"]
       console.log(l)
        let data1=await Postmodel.find({"device":l,"userID":req.body.userID})
        data=[data1,data2];
        res.send(data);
 
    }
    else  {
        data=await Postmodel.find({"userID":req.body.userID});
        res.send(data);
 
    }

})

postrouter.post("/create",async(req,res)=>{
    let payload=req.body;
    console.log(req.body);
    let data=new Postmodel(req.body);
    await data.save();
    res.send({"msg":"done"})
})







module.exports={
    postrouter
}