import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
const connectDB = async ()=>{
    try {
        const connectionInstance = await mongoose.connect(
            `${process.env.MONGODB_URL}/${DB_NAME}`
        )
        console.log(`MONGODB connection pass: ${ connectionInstance.connection.host } `);

    } catch (error) {
        console.log("MONGODB connection error ",error)
    }
}
export default connectDB
