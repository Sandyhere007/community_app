import { User } from "../models/user.js";
import bcrypt from 'bcrypt';
import { sendCookie } from "../utils/sendCookie.js";
import ErrorHandler from "../middleware/errorHandler.js";

export const register = async (req, res, next) => {
    try {
        const { name, username, phone, email, password, userType } = req.body;

        // if(password !== cpassword ) return next(new ErrorHandler("Password and Confirm password do not match",422));
        let user = await User.findOne({ email });
        if (user) return next(new ErrorHandler("User Already Exists"), 400);
        const hashedPassword = await bcrypt.hash(password, 10);
        user = await User.create({ name, username, phone, email, password: hashedPassword, userType: "user" });
        sendCookie(user, res, "User Registered Successfully");
    }
    catch (error) {
        next( new ErrorHandler( "Some error Occured ! try Again after some time ", 500));
        
    }
};

export const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user) return next(new ErrorHandler("User Not Found Kindly Login First"));

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
    res.clearCookie("token",{path: '/'});
    res.status(200).json({
        success:true,
        message: "Logout Done",
    })

}
