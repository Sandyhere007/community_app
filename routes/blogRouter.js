import express from "express";
import { addBlog, allBlog, blogPost, category, myBlog, updatePost} from "../controller/blogController.js";
import multer from "multer";


const blogRouter = express.Router();

const uploadMiddleware = multer({dest : "uploads/"});


blogRouter.post("/addblog", uploadMiddleware.single('file') ,  addBlog )
blogRouter.get("/all" , allBlog);
blogRouter.get("/blogpost/:id" , blogPost);
blogRouter.put("/addblog/:id" ,uploadMiddleware.single('file') , updatePost);
blogRouter.get("/myblogs/:id" , myBlog);
blogRouter.get("/by-category" , category);



export default blogRouter;