const express=require("express")

const { addbooking, getbooking, deletebooking, updatebooking, getBookingByHotelId }=require("../controller/bookigcontroller")

const brouter=express.Router()

brouter.post("/add",addbooking)
brouter.get("/get",getbooking)
brouter.delete("/delete/:id",deletebooking)
brouter.patch("/update/:id",updatebooking)
brouter.get("/get/:id",getBookingByHotelId)



module.exports=brouter