
// const hotelModel=require("../model/hotelModel")

// const addhotel=async (req,res)=>{
//     const data = await hotelModel.create(req.body)
//     return res.send(data)
// }

// const gethotel= async (req,res)=> {
//     try{

//         const hoteldata=await hotelModel.find()
//         return res.send(hoteldata)
//     }catch (error){
//         console.log("error")
//     }
//  }

 
// const deletehotel = async (req, res) => {
//     const id  = req.params.id;
//     const data = await hotelModel.findByIdAndDelete(id)
//     return res.send("deletedata", data)
// }

// const gethotelbyid = async (req, res) => {
// //     const {id}=req.params
// //     try{
// //         const hotel =await hotelModel.findById(id).populate("hotelId")
// //         if (!hotel) {
// //             return res.status(404).send({ message: "Hotel Not Found" });
            
// //         }
// //          res.status(200).send(hotel)
// //     }catch{
// //         console.log("error")
// //     }

//     }

// module.exports={
// addhotel,gethotel,deletehotel,gethotelbyid
// }

const hotelModel = require("../model/hotelModel");

const addhotel = async (req, res) => {
    const data = await hotelModel.create(req.body);
    return res.send(data);
};

const gethotel = async (req, res) => {
    try {
        const hoteldata = await hotelModel.find();
        return res.send(hoteldata);
    } catch (error) {
        console.log("error", error);
        return res.status(500).send({ message: "An error occurred while fetching hotels" });
    }
};

const deletehotel = async (req, res) => {
    const id = req.params.id;
    try {
        const data = await hotelModel.findByIdAndDelete(id);
        if (!data) {
            return res.status(404).send({ message: "Hotel not found" });
        }
        return res.send({ message: "Hotel deleted successfully", data });
    } catch (error) {
        console.log("error", error);
        return res.status(500).send({ message: "An error occurred while deleting the hotel" });
    }
};

// Get a single hotel by ID
const gethotelbyid = async (req, res) => {
    const { id } = req.params; // Get ID from URL parameters
    try {
        const hotel = await hotelModel.findById(id); // Find the hotel by its ID
        if (!hotel) {
            return res.status(404).send({ message: "Hotel not found" });
        }
        return res.status(200).send(hotel);
    } catch (error) {
        console.log("error", error);
        return res.status(500).send({ message: "An error occurred while fetching the hotel" });
    }
};

module.exports = {
    addhotel,
    gethotel,
    deletehotel,
    gethotelbyid,
};
