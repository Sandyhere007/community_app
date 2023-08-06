import express from "express";
import { getMyProfile, login, logout, register } from "../controller/userController.js";
import { isAuthenticated } from "../middleware/auth.js";

export const userRouter = express.Router();

userRouter.post("/register", register )
userRouter.post("/login",  login )
userRouter.get("/logout", isAuthenticated, logout )
userRouter.get("/profile",isAuthenticated , getMyProfile )