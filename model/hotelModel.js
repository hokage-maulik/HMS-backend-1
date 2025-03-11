
const mongoose=require("mongoose")

const hotelSchema=new mongoose.Schema({
    name:{
        type: String,
    },
    image:{
        type:String,
    },
    price:{
        type:String,
    }
})

const hotelModel=new mongoose.model("hotel",hotelSchema)

module.exports=hotelModel