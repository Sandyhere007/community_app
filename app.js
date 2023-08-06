import { config } from "dotenv";
import express from "express";
import challengeRouter from "./routes/challengeRouter.js";
import { errorMiddleware } from "./utils/errorHandler.js";
// import { sendCookie } from "./utils/sendCookie.js";
import { userRouter } from "./routes/userRouter.js";


export const app = express();

app.use(express.json())
app.use(challengeRouter)
app.use(userRouter)
config({
    path:"./data/config.env"
})


app.get("/",(req,res)=>{
    res.send("BELIEVE IN YOURSELF KING");
})
app.use(errorMiddleware);