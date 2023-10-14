import { Blog } from "../models/blog.js";
import path from "path";
import fs from 'fs';
import cloudinary from 'cloudinary';

export const addBlog = async (req, res) => {
  // const options = {
  //   use_filename : true,
  //   unique_filename: false,
  //   overwrite: true,
  // };
  if(!req.file) res.status(404).json({
    success: false,
    message: "Select a file first",
  })
  const { originalname, filename } = req.file; 

 const result = cloudinary.v2.uploader.upload(req.file.path)
  const { title, summary, category, content ,author } = req.body;

 try {
  const blogData = await Blog.create({
    title : title,
    summary : summary,
    category : category,
    blogImage: (await result).secure_url,
    content : content,
    author : author,
  })
  res.json({
    success: true,
    message: " BlogPost Created Successfully",
    data: blogData
  })
 
 } catch (error) {
    res.status(500).json({
      success: false,
    })
 }
}

export const allBlog = async(req, res) =>{
    res.json(
        await Blog.find()
          .populate('author', ['username'])
          .sort({createdAt: -1})
      );
} 


export const blogPost = async (req, res) => {
  const { id } = req.params;
  const blogData = await Blog.findById(id).populate('author', ['username']);
  res.json(blogData);
}



export const updatePost = async (req, res) => {
    // const options = {
    //   use_filename : true,
    //   unique_filename: false,
    //   overwrite: true,
    // };
    if(!req.file) res.status(404).json({
      success: false,
      message: "Select a file first",
    })
    const { originalname, filename } = req.file; 
   const result = cloudinary.v2.uploader.upload(req.file.path)
    const { title, summary, category, content ,author } = req.body;
   try {
    const blogData = await Blog.create({
      title : title,
      summary : summary,
      category : category,
      blogImage: (await result).secure_url,
      content : content,
      author : author,
      
    })
    res.json({
      success: true,
      message: " BlogPost Created Successfully",
      data: blogData
    })
   
   } catch (error) {
      res.status(500).json({
        success: false,
      })
   }
  }

export const myBlog = async(req,res)=>{
  const { id } =req.params;
  try {
    const myBlogs = await Blog.find({author : id});
    res.json(myBlogs);
  } catch (error) {
    res.json({
      success: false,
      message:"Something went wrong",
    })
  }

}
export const category =async (req, res) =>{
  const {category} =req.query ;  // query params
 
    const categories = await Blog.find({category:`${category}`})

    res.status(200).json(categories)
}