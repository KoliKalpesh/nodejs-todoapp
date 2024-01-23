import express from "express";
import mongoose from "mongoose";

//1
const app = express();
//9 making router




//using middleware
app.use(express.json())

//3
mongoose.connect("mongodb://127.0.0.1:27017",{
    dbName:"nodeapi"
}).then(()=>console.log("databas cpnnected")).catch((e)=>console.log(e));

//5
const schema = new mongoose.Schema({
    name:String,
    email:String,
    password:String,
});

const User = mongoose.model("User",schema)

//4
app.get("/",(req,res)=>{
    res.send("noice")
});

//6
//fetching all users 
app.get("/users/all",async(req,res)=>{
    console.log(req.query)

    const users =await User.find({})
    res.json({
    success: true,
    users,
    })
    
});

//7
//creating new user post mthd
app.post("/users/new",async(req,res)=>{

    const {name,email,password}= req.body;

    await User.create({
        name,email,password
    })
    
    res.status(201).cookie("kookie","im kooki").json({
    success: true,
    message: "registered successfully",
    });
});

//8 getting user id with url
// app.get("/userid",async(req,res)=>{
//     const {id}=req.query;
//     // const user = await User.findById(id);

//     res.json({
//         success:true,
//         user
//     })

// })


//dynamic urls
// /userid/ is static and rest part is dynamic which can be anything
/// /userid/kalpesh
// /userid/harry

//normal route 8
app.get("/userid/special",(req,res)=>{
    res.json({
        success:true,
        message:"just done",
    });
});

//for dynamic route
app.get("/userid/:id",async(req,res)=>{
    
    const {id}=req.params;
    const user = await User.findById(id);
    res.json({
        success:true,
        user,
    })
})

//2
app.listen(4000,()=>{
    console.log("hii from server")
    
})