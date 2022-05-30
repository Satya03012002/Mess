import  express  from "express";
const studentRouter = express.Router();
import {getAllUser} from "./func.js"
import {loginUser} from "./func.js"
import {signUpUser} from "./func.js"
import {getById} from "./func.js"
import {like} from "./func.js"
import {unlike} from "./func.js"
import {dislike} from "./func.js"
import {removedislike} from "./func.js"
import {comment} from "./func.js"
import {rating} from "./func.js"

studentRouter.get("/",getAllUser);
studentRouter.post("/login", loginUser)
studentRouter.post("/signUp", signUpUser);
studentRouter.get("/:id", getById);
studentRouter.put("/like/:day/:time/:id",like)
studentRouter.put("/unlike/:day/:time/:id",unlike)
studentRouter.put("/dislike/:day/:time/:id",dislike)
studentRouter.put("/remdislike/:day/:time/:id",removedislike)
studentRouter.put("/comment/:day/:time/:id",comment)
studentRouter.put("/rating/:day/:time/:id",rating)



export default studentRouter;