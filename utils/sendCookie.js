import jwt from "jsonwebtoken";
export const sendCookie = (user,res,message,status=201) =>{

    const token = jwt.sign({_id:user._id},process.env.JWT_SECRET);
    res.cookie("token",token,{
        httpOnly: true,
        maxAge : 1000*60*15,
        sameSite: process.env.NODE_ENV==="Development" ? "lax" : "none",
        secure : process.env.NODE_ENV==="Development" ? false : true,
    }).json({
        secure: true,
        message,
    })
}
