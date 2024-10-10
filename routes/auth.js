const express=require('express');
const User=require('../models/user');
const router= express.Router();
router.post('/register',async(req,res)=>{
    const {username,email,password,phonenumber}=req.body;
    console.log(req.body);
    try{
        const newuser=new User({username,email,password,phonenumber});
        await newuser.save();
        res.status(201).json({message:'user registersed succesfully'});
    }catch(error){
        res.status(500).json({error:error.message});
    }
})
router.post('/login',async(req,res)=>{
    const{email,password}=req.body;
    try{
        const user= await User.findOne({email});  
        if(!user){
            return res.status(404).json({message:'user not found'});
        }
        if(user.password!==password){
            return res .status(400).json({message:'invalid credentials'});
        }
        res.json({message:'login succesful',user});
    }catch(error){
        res.status(500).json({error: error.message});
    }
});
module.exports=router;