
import express from "express";
import { addNew, all } from "../controller/challengeControllers.js";

const challengeRouter = express.Router();


challengeRouter.post("/addNew" , addNew)
challengeRouter.post("/all" , all)

export default challengeRouter;