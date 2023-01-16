const mongo=require("mongoose");
const UserSchema=mongo.Schema({
    name:String,
    email:String,
    gender:String,
    password:String
})
const Usermodel=mongo.model("user",UserSchema);
module.exports={
    Usermodel
}