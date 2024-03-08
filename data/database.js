import mongoose from "mongoose";



export const connectDB = ()=>{
    mongoose.connect(process.env.MONGO_URI,{
    dbName:"nodeapi"
}).then((c)=>console.log(`database connected : ${c.connection.host}`)).catch((e)=>console.log(e));

}