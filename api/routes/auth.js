const router=require('express').Router();
const { route } = require('express/lib/application');
const req = require('express/lib/request');
const User=require("../models/User");
const bycryt=require('bcrypt');

//REGISTER
//async bcs long and not sync work
router.post("/register",async(req,res)=>{
    try{
        //password hiding using bycrypt
        const salt=await bycryt.genSalt(10);
        //hashed password
        const hashedPass=await bycryt.hash(req.body.password, salt);
     const newUser=new User({
         username:req.body.username,
         email:req.body.email,
         password:hashedPass,
     })
     //await bcs async 
     //saving in db
     const user=await newUser.save();
     res.status(200).json(user);
    }catch(err){
        res.status(500).json(err);
    }
})
 module.exports=router;
//lOGIN