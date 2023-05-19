import mongoose from "mongoose";
//
const CONNECTION_URL =  "mongodb+srv://${process.env.DBNAME}:${process.env.PASSWORD}@cluster0.7qel1.mongodb.net/mernyoutube?retryWrites=true&w=majority";

mongoose.connect(CONNECTION_URL,{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>console.log("mongodb connection successful"))
.catch((err)=>console.log(err));
