import  express  from "express";
const menuRouter = express.Router();

import {getMenu} from "./func.js" 

import {addMenu} from "./func.js" 
import {updateMenu} from "./func.js" 
import {deleteMenu} from "./func.js"

menuRouter.get("/", getMenu);
menuRouter.post("/add/:id", addMenu);
menuRouter.put("/update/:id",updateMenu);
menuRouter.delete("/delete/:id",deleteMenu);





export default menuRouter;



