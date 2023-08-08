import express from "express";
import { getMyProfile, login, logout, register } from "../controller/userController.js";
import { isAuthenticated } from "../middleware/auth.js";
const userRouter = express.Router();

userRouter.post("/register", register )
userRouter.post("/login",  login )
userRouter.get("/logout",  logout )
userRouter.get("/profile",isAuthenticated , getMyProfile )


export default userRouter;