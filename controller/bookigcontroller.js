
const bookingModel=require("../model/bookingModel")

const addbooking=async (req,res)=>{
    const data = await bookingModel.create(req.body)
    return res.send(data)
}

const getbooking= async (req,res)=> {
    
    try{
        const {hotelId}=req.query
        const query=hotelId ? {hotelId} : {}

        const bookingdata=await bookingModel.find(query).populate("hotelId")
        return res.send(bookingdata)
    }catch (error){
        console.log("error")
    }
 }

 const updatebooking = async (req,res) => {
    const id = req.params.id
    const data = await bookingModel.findByIdAndUpdate(id,(req.body))
    return res.send(data)
}

const deletebooking = async (req, res) => {
    const id  = req.params.id;
    const data = await bookingModel.findByIdAndDelete(id)
    return res.send("deletedata", data)
}

const getBookingByHotelId = async (req, res) => {
    try {
        const { hotelId } = req.query;

        // Ensure hotelId is provided
        if (!hotelId) {
            return res.status(400).json({ message: "hotelId query parameter is required." });
        }

        // Fetch bookings filtered by hotelId and populate hotel details
        const bookingData = await bookingModel.find({ hotelId }).populate("hotelId");

        if (!bookingData.length) {
            return res.status(404).json({ message: "No bookings found for the given hotelId." });
        }

        return res.status(200).json(bookingData);
    } catch (error) {
        console.error("Error fetching bookings by hotelId:", error);
        return res.status(500).json({ message: "Internal server error." });
    }
};

module.exports={
    addbooking,getbooking,updatebooking,deletebooking,getBookingByHotelId
}

