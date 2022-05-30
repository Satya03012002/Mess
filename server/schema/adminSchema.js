import mongoose from "mongoose";

const admindata = new mongoose.Schema({
    FirstName:{
        type:String
    },
    LastName:{
        type:String,
    },
    HostelName:{
        type:String,
    },
    Password:{
        type:String,
        //required : true,
        minlength : 6

    },
    Conformpassword:{
        type:String,
       // required : true,
        minlength : 6
    },
    email:{
        type:String,
        unique:true,
          // required : true,
        
    },
    Announcement:[
        {
            type:mongoose.Types.ObjectId,
            ref:"AnnouncementData"
        }
    ],
    menu:{
        type:mongoose.Types.ObjectId,
        ref:"FoodData",
        default:null

    },
    user:[{
        type:mongoose.Types.ObjectId,
        ref:"UserData"

    }]
})
 const AdminData = new mongoose.model("AdminData",admindata);
 export default AdminData;