import { User } from "../models/user.js";
import bcrypt from 'bcrypt';
import { sendCookie } from '../utils/sendCookie.js';
import ErrorHandler from "../middleware/errorHandler.js";

export const register  = async(req,res,next) =>{
   try {
    const {name ,username ,  phone, email , password , userType } = req.body;

    const  isMatch = await User.findOne({email, userType:"admin"});
    if(isMatch) return next(new ErrorHandler("Admin Already Registered", 400));
    const hashedPassword = await bcrypt.hash(password,10);
    const user = await User.create({name ,username, phone , email ,password : hashedPassword , userType : "admin"});
    sendCookie(user,200,"Admin registered Successfully");

   } catch (error) {
        next(new ErrorHandler("Some error Occured! Try Again later",500))    
   }
}

export const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email , userType:"admin" });
        if (!user) return next(new ErrorHandler("Do not have admin Priviledge! Get admin account first"));

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return next(new ErrorHandler("Incorrect Password Please Enter the correct Password"));
        sendCookie(user, res, `Welcome Admin! ${user.name}`, 200);
    } catch (error) {
        next(error);
    }
};