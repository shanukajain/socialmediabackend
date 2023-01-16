const mongo=require("mongoose");
const PostSchema=mongo.Schema({
    Title:String,
    body:String,
    device:String,
    userID:String
})
const Postmodel=mongo.model("post",PostSchema);
module.exports={
    Postmodel
}