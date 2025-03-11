const mongoose=require("mongoose")

mongoose.connect("mongodb://localhost:27017/Project1")

const db=mongoose.connection

db.on("connected",()=>{
    console.log("connected to database")
})