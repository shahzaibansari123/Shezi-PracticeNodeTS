import { Router } from "express";
import { getUsers } from "../Controllers/User.js";


const route = Router();


route.get('/all', getUsers)


export default route