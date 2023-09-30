import jwt from "jsonwebtoken";
export const sendCookie = (user,res,message,statusCode=200) =>{

    const token = jwt.sign({_id:user._id},process.env.JWT_SECRET);
    res.status(statusCode).cookie("token",token,{
        httpOnly: true,
        maxAge : 1000*3600*24*7,
        sameSite: process.env.NODE_ENV==="Development" ? "Lax" : "none",
        secure : process.env.NODE_ENV==="Development" ? false : true,
    }).json({
        secure: true,
        message,
    });
};
