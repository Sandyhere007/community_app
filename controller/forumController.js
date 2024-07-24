import { Forum } from "../models/forum.js";

export const sendMessage = async(req,res) =>{
    const { message, senderId } = req.body;
    try{
        const messageData = await Forum.create({
            message : message,
            senderId : senderId,
        })
        res.status(200).json({
            success : true,
            message: "Message Sent",
            data :messageData,
        })
    }
    catch{
        res.status(400).json({ 
            success : false,
            message : 'Failed to Send Message'
        });
    }
}

export const allForumMessages = async(req, res) =>{
    res.json(
        await Forum.find()
        .populate('senderId',[ 'username'])
        
    )
}