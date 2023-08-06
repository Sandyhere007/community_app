import { User } from "../models/user.js";
import bcrypt from 'bcrypt';
import { sendCookie } from "../utils/sendCookie.js";

export const register = async(req,res,next) =>{
    try {
        const { name, phone, email, password } = req.body;
    // if(  !name || !phone || !email || !password || !cpassword) return 
    // res.status(422).json({
    //     success : false,
    //     message : "Please Fill all Fiels Correctly! "
    // })
    // if(password !== cpassword ) return next(new ErrorHandler("Password and Confirm password do not match",422));
    let user =await User.findOne({email});
    if(user) return  next(new ErrorHandler("Please Fill all Fiels Correctly!"),422) ;
    const hashedPassword = await bcrypt.hash(password,10);
    user = await User.create({name, phone, email, password: hashedPassword })
    sendCookie(user,res,"User Registered Successfully");
    }
     catch (error) {
        res.send(error.message)
    }
}
    
    export const login = async(req,res) =>{

}
export const getMyProfile = async(req,res) =>{
    
}
export const logout = async(req,res) =>{
    
}