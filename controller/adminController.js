import bcrypt from 'bcrypt';
import ErrorHandler from "../middleware/errorHandler.js";
import { User } from "../models/user.js";
import { sendCookie } from '../utils/sendCookie.js';

export const register  = async(req,res) =>{
   try {
    const {name , phone, email , password , userType } = req.body;

    let user = await User.findOne({email, userType:"admin"});
    if(user) return next(new ErrorHandler("Admin Already Registered", 400));
    const hashedPassword = await bcrypt.hash(password,10);
    user = await User.create({name , phone , email ,password : hashedPassword , userType:"admin"});
    sendCookie(user,200,"Admin registered Successfully");

   } catch (error) {
        next(error)    
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