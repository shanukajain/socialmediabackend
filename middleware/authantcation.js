const jwt=require("jsonwebtoken");
require("dotenv").config();
const key=process.env.key;

const authantication=(req,res,next)=>{
try {
    let token=req.headers.authorization;
    var decoded = jwt.verify(token, key);
    if(decoded){
        console.log(decoded);
        req.body.userID=decoded.userId;
        next();
    }else {
        res.send({"msg":"login please"})
    }

} catch (error) {
    console.log(error);
    res.send({"msg":"login please"})
}
}
module.exports={
    authantication
}