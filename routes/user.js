const express=require("express");
const userlist = require("../users");
const userRouter=express.Router();


//get user
userRouter.get("/",(req,res)=>res.send("i am a user"))
userRouter.get("/data",(req,res)=>res.send({users:userlist}))
userRouter.get("/store",(req,res)=>{
    let date=new Date();
    let hours=date.getHours();
    hours>8 && hours<18?res.render("open"):res.render("close");
})
//add user


//delete user


//update user
module.exports=userRouter;