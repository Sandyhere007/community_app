
import express from "express";
import { addNew, all } from "../controller/challengeControllers.js";

const challengeRouter = express.Router();


challengeRouter.post("/addNew" , addNew)
challengeRouter.get("/all" , all)

export default challengeRouter;