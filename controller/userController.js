import { User } from "../models/user.js";
import bcrypt from 'bcrypt';
import { sendCookie } from "../utils/sendCookie.js";
import ErrorHandler from "../middleware/errorHandler.js";

export const register = async (req, res, next) => {
    try {
        const { name, email, password } = req.body;
       
        // if(password !== cpassword ) return next(new ErrorHandler("Password and Confirm password do not match",422));
        let user = await User.findOne({ email });
        if (user) return next(new ErrorHandler("User Already Exists"), 400);
        const hashedPassword = await bcrypt.hash(password, 10);
        user = await User.create({ name, email, password: hashedPassword });
        sendCookie(user, res, "User Registered Successfully");
    }
    catch (error) {
        next(error);
    }
};

export const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user) return next(new ErrorHandler("User Not Find Kindly Login First"));

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return next(new ErrorHandler("Incorrect Password Please Enter the correct Password"));
        sendCookie(user, res, `Welcome ${user.name}`, 200);
    } catch (error) {
        next(error);
    }
};
export const getMyProfile = async (req, res) => {
    res.status(200).json({
        success: true,
        user: req.user,
    });
};
export const logout = async (req, res) => {
    res.status(200).cookie("token" , "", {
        expires : new Date(Date.now()),
        sameSite: process.env.NODE_ENV === "Develpoment" ? "lax" : "none",
        secure: process.env.NODE_ENV === "Develpoment" ? false : true,
    })
    .json({
        success: true,
        message:"Logout Successfull",
        user :req.user,
    })

}
