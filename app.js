import express from "express";

import userRoute from './routes/user.js';
import taskRouter from './routes/task.js';
import { config } from "dotenv";
import cookieParser from "cookie-parser";
import { errorMiddleware } from "./middlewares/error.js";

import cors from 'cors';

config({
    path:"./data/config.env",
})


export const app = express();


//using middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin:[process.env.FRONTEND_URL],
    credentials:true,
    methods:['GET','POST','DELETE','PUT'],
}))

//using routes
app.use("/api/v1/users",userRoute);
app.use("/api/v1/task",taskRouter);


app.get("/",(req,res)=>{
    res.send("noice working")
});

app.use(errorMiddleware);

