import express from "express";
import { getMyProfile, login, logout, register } from "../controller/userController.js";

export const userRouter = express.Router();

userRouter.post("/register", register )
userRouter.post("/login", login )
userRouter.post("/logout", logout )
userRouter.post("/profile", getMyProfile )