const mongo=require("mongoose");
require("dotenv").config();
const url=process.env.mongoURL;
// console.log(url)
const connection=mongo.connect(url);
module.exports={
    connection
}