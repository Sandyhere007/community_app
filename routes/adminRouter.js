import express  from "express";
import { addQuestions, login, register } from "../controller/adminController.js";

const adminRouter = express.Router();

adminRouter.post("/register" , register);
adminRouter.post("/login" , login);


export default adminRouter;