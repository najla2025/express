const express=require("express");
const productRouter=express.Router();
//get user

productRouter.get("/",(req,res)=>res.send("i am a product"))


//add user


//delete user


//update user
module.exports=productRouter;