import express from "express";

import userRoute from './routes/user.js';

import { config } from "dotenv";

config({
    path:"./data/config.env",
})


export const app = express();


//using middleware
app.use(express.json());
app.use("/users",userRoute);


app.get("/",(req,res)=>{
    res.send("noice working")
});

