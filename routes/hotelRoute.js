
const express=require("express")

const { addhotel, gethotel, deletehotel, gethotelbyid }=require("../controller/hotelcontroller")

const hrouter=express.Router()
hrouter.post("/add",addhotel)
hrouter.get("/get",gethotel)
hrouter.delete("/delete/:id",deletehotel)
hrouter.get("/get/:id",gethotelbyid)

module.exports=hrouter