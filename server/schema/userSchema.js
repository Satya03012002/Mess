import mongoose from "mongoose";

const userdata = new mongoose.Schema({
    FirstName:{
        type:String
    },
    LastName:{
        type:String,
    },
    HostelName:{
        type:String,
    },
    BlockName:{
        type:String,
    },
    RoomNo:{
        type:Number,

    },
    EnrolmentNo:{
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
    menu:{
        type:mongoose.Types.ObjectId,
        ref:"FoodData"
        
        
    },
    

})

 const UserData = new mongoose.model("UserData",userdata);
 export default UserData;