import { User } from "../models/user.js";
import bcrypt from 'bcrypt';
import { sendCookie } from "../utils/sendCookie.js";
import ErrorHandler from "../middleware/errorHandler.js";

export const register = async (req, res, next) => {
    try {
        const { name, phone, email, password } = req.body;
        // if(  !name || !phone || !email || !password || !cpassword) return 
        // res.status(422).json({
        //     success : false,
        //     message : "Please Fill all Fiels Correctly! "
        // })
        // if(password !== cpassword ) return next(new ErrorHandler("Password and Confirm password do not match",422));
        let user = await User.findOne({ email });
        if (user) return next(new ErrorHandler("Please Fill all Fiels Correctly!"), 422);
        const hashedPassword = await bcrypt.hash(password, 10);
        user = await User.create({ name, phone, email, password: hashedPassword })
        sendCookie(user, res, "User Registered Successfully");
    }
    catch (error) {
        res.send(error.message)
    }
}

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
}
export const getMyProfile = async (req, res) => {
    res.status(200).json({
        success: true,
        user: res.user,
    })
    console.log(res.user);
}
export const logout = async (req, res) => {
    res.status(404).cookie("token" , "", {expires : new Date(Date.now())})
    .json({
        success: true,
        message:"Logout Successfull",
    })

}
