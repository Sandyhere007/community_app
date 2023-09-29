
import express from "express";
import { addNew, all, isComplete } from "../controller/challengeControllers.js";

const challengeRouter = express.Router();


challengeRouter.post("/addNew" , addNew);
challengeRouter.get("/all" , all);
challengeRouter.put("/isComplete" , isComplete);

export default challengeRouter;