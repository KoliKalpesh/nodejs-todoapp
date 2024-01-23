import { app } from "./app.js";
import {connectDB} from './data/database.js'

//all middlewares and database

connectDB();

app.listen(process.env.PORT,()=>{
    console.log("hii from server")
    
});