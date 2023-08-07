import { config } from "dotenv";
import express from "express";
import challengeRouter from "./routes/challengeRouter.js";
import { errorMiddleware } from "./middleware/errorHandler.js";
// import { sendCookie } from "./utils/sendCookie.js";
import { userRouter } from "./routes/userRouter.js";
import cookieParser from "cookie-parser";
import cors from 'cors';

export const app = express();

config({
    path:"./data/config.env"
})
app.use(express.json())
app.use(cookieParser());
app.use(
    cors({
        origin: process.env.FRONTEND_URL ,
        credentials : true,
        methods:["GET","POST","PUT","DELETE"],
    })
);
app.use("/challenge",challengeRouter);
app.use("/user",userRouter);

app.get("/",(req,res)=>{
    res.send("BELIEVE IN YOURSELF KING");
})
app.use(errorMiddleware);