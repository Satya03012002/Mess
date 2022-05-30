
import  express  from "express";
import bodyParser from "body-parser";
import cors from 'cors';
  import "./db/conn.js";

import adminRouter from "./router/adminPost/router.js";
import menuRouter  from "./router/menuPost/router.js";
import studentRouter from "./router/studentPost/router.js";


const PORT = process.env.PORT || 5000

const app = express();

app.use(cors());


app.use(bodyParser.json());
// app.use(bodyParser.urlencoded());


app.use("/admin",adminRouter);

app.use("/menu",menuRouter);

app.use("/student",studentRouter);


app.listen(PORT,()=>{
    console.log(`server running on port : ${PORT}`)
})

