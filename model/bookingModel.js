const mongoose=require("mongoose")

const bookingSchema=new mongoose.Schema({
    roomno:{
        type:String,
    },
    persons:{
        type:String,
    },
     email: {
            type: String,
        },
        phone: {
            type: String,
        },
    
    
    
    hotelId:{
        type:mongoose.Schema.Types.ObjectId,ref:"hotel"

    }

})

const bookingModel=new mongoose.model("booking",bookingSchema)
module.exports=bookingModel
