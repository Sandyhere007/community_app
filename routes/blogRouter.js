import express from "express";
import { addBlog, allBlog, blogPost, myBlog, updatePost} from "../controller/blogController.js";
import multer from "multer";


const blogRouter = express.Router();

const uploadMiddleware = multer({dest : "uploads/"});


blogRouter.post("/addblog", uploadMiddleware.single('file') ,  addBlog )
blogRouter.get("/all" , allBlog);
blogRouter.get("/blogpost/:id" , blogPost);
blogRouter.put("/blogpost/:id" ,uploadMiddleware.single('file') , updatePost);
blogRouter.get("/myblogs/:id" , myBlog);



export default blogRouter;