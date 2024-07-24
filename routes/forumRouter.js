import express from "express";
import { allForumMessages , sendMessage } from "../controller/forumController.js";



const forumRouter = express.Router();

forumRouter.get("/all", allForumMessages);
forumRouter.post("/send" , sendMessage);

export default forumRouter;