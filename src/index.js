import dotenv from "dotenv";
import mongoose from "mongoose";
import connectDB from "./db/index.js";
import express from  "express"
const app = express()
dotenv.config({
  path: "./env",
});

connectDB()
  .then(() => {
    app.listen(process.env.PORT , ()=>{
        console.log(`server is running at port :${process.env.PORT}  `)
    } )
  })
  .catch(console.log("mongo db connection failed"));
