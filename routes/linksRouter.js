import express from "express";
import { allLinks, createLink, deleteLink, updateLink } from "../controller/linksControllers.js";

const linksRouter = express.Router();

linksRouter.post("/add", createLink)
linksRouter.get("/all" , allLinks);
linksRouter.route("/:id").put(updateLink).delete(deleteLink)


export default linksRouter;