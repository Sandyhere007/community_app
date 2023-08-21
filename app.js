import { config } from "dotenv";
import express from "express";
import challengeRouter from "./routes/challengeRouter.js";
import { errorMiddleware } from "./middleware/errorHandler.js";
// import { sendCookie } from "./utils/sendCookie.js";
import userRouter from "./routes/userRouter.js";
import adminRouter from "./routes/adminRouter.js";
import linksRouter from "./routes/linksRouter.js";
import cookieParser from "cookie-parser";
import cors from 'cors';
import fs from 'fs';
import path from "path";

import blogRouter from "./routes/blogRouter.js";

export const app = express();

config({
    path: "./data/config.env"
});
app.use(express.json())
app.use(cookieParser());
app.use(
    cors({
        origin: process.env.FRONTEND_URL,
        credentials: true,
        methods: ["GET", "POST", "PUT", "DELETE"],
    })
);

app.use('/uploads', express.static(path.join(path.resolve(), '/uploads')));


app.use("/challenge", challengeRouter);
app.use("/user", userRouter);
app.use("/admin", adminRouter);
app.use("/links", linksRouter);
app.use("/blog", blogRouter)
app.get("/", (req, res) => {
    res.send("BELIEVE IN YOURSELF KING");
})
app.use(errorMiddleware);
