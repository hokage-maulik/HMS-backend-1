const express=require("express")
const db=require("./config/db")
const cors=require("cors")
const bodyparser=require("body-parser")
const router = require("./routes/userRoute")
const brouter = require("./routes/bookingRoute")
const hrouter = require("./routes/hotelRoute")

const app=express()
app.use(cors())
app.use(bodyparser.json())
app.use("/user",router)
app.use("/booking",brouter)
app.use("/hotel",hrouter)

app.listen(8000,()=>{
    console.log("server is running on port 8000")
})