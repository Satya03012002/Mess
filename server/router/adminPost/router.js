import express from "express";
const adminRouter = express.Router();

import {getAllAdmin} from "./func.js"
import {getAllUser} from "./func.js"
import {loginData} from "./func.js"
import {signUpData} from "./func.js"
import {addAnnounce} from "./func.js"



adminRouter.get("/", getAllAdmin);
adminRouter.post("/login",loginData);
adminRouter.post("/signUp",signUpData);
adminRouter.post("/announce/:id",addAnnounce);
adminRouter.get("/list/:id", getAllUser);







export default adminRouter;