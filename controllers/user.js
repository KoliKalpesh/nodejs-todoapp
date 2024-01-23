import { User } from "../models/user.js";

export const getAllUsers = async(req,res)=>{
    console.log(req.query)

    const users =await User.find({})
    res.json({
    success: true,
    users,
    })
};

export const registerUser = async(req,res)=>{

    const {name,email,password}= req.body;

    await User.create({
        name,email,password
    })
    
    res.status(201).cookie("kookie","im kooki").json({
    success: true,
    message: "registered successfully",
    });
};

export const specialFunc =(req,res)=>{
    res.json({
        success:true,
        message:"just done",
    });
};

export const getUserDetails =async(req,res)=>{
    
    const {id}=req.params;
    const user = await User.findById(id);
    res.json({
        success:true,
        user,
    })
};

export const userUpdate =async(req,res)=>{
    
    const {id}=req.params;
    const user = await User.findById(id);
    res.json({
        success:true,
        message:"updated user",
    })
};

export const userDelete =async(req,res)=>{
    
    const {id}=req.params;
    const user = await User.findById(id);
    
    // await user.remove();

    res.json({
        success:true,
        message:"Deleted user",
    })
};