import mongoose from "mongoose";

const menudata = new mongoose.Schema({

    menu:{
        type: String,
        default:""
    },
    Like:[{
        user:{
            type:mongoose.Types.ObjectId,
            ref:"UserData",
            unique:true
        }
    }

    ],
    Dislike:[{
        user:{
            type:mongoose.Types.ObjectId,
            ref:"UserData",
            unique:true
        }
    }

    ],
    comment :[
        {
            feedback:{
                type:String,
                default:""
            },
            user:{
                type:mongoose.Types.ObjectId,
                ref:"UserData"
            },
            date :{
                type:Date,
                default: Date.now()
            },

        }    
       
    ],
    image:{
        type:String,
        default:""
    },
    key:{
        type:Number,
        default:1
    }




    

   
    
   


})

const MenuData = new mongoose.model("MenuData",menudata);
export default MenuData