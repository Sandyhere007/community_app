import { Links } from "../models/links.js";
import ErrorHandler from "../middleware/errorHandler.js";


export const createLink = async (req, res) => {
    const { username, title, url } = req.body;

    try {
        const newLink = await Links.create({
            username: username,
            title: title,
            url: url
        })
        res.status(201)
            .json({
                success: true,
                message: "Link Created Successfully",
                data : newLink
            })
    } catch (error) {
        console.log(`Error creating link ${error}`)
        return res
            .status(500)
            .json({
                success: false,
                message: "Link Not Created",
            })
    }
}

export const allLinks = async (req, res, next) => {
    try {
        const matched = await Links.find();
        res.status(200).json(matched);
    } catch (error) {
        next(error)
    }
}
export const updateLink = async (req, res,next) => {
 try {
    const link = await Links.findById(req.params.id);
    const {title , url} = req.body;
   link.title = title;
   link.url=  url ;

   await link.save();
   res.status(200).json({
    success: true,
    message : "Link Updated Successfully",
    data : link,
   })
      
 } catch (error) {
    next(error);
 }      
}

export const deleteLink = async (req,res,next) =>{
    try {
        const link = await Links.findById(req.params.id);
    await link.deleteOne();

    res.status(200).json({
        success: true,
        message : "Link Deleted Successfully",
        
       })
    } catch (error) {
        next(error);
    }
}