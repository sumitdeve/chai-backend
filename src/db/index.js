import mongoose from "mongoose";
import { DB_NAME } from "../constans.js"
 
export const connectDB = async () => {
        await mongoose.connect('mongodb+srv://sumitdev9670:sumit8081079670@cluster0.snd3cbr.mongodb.net/youtube').then(()=>{
            console.log("DB Connected");
        })
        
}