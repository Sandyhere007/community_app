import mongoose from "mongoose";

export const connectDB = () => mongoose.connect((process.env.MONGODB_URL),
     { 
          dbName:"community",
          
          })
     .then((e) => console.log("Database connected successfully"))
     .catch((e) => console.log(e));