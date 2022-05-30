import mongoose from "mongoose";
const announcementdata = new mongoose.Schema({
    announce:{
        type:String,
    },
    date:{
        type:Date,
        default: Date.now()
    },
    user:{
        type:mongoose.Types.ObjectId,
        ref:"AdminData"
    }
})

const AnnouncementData = new mongoose.model("AnnouncementData",announcementdata);
export default AnnouncementData;