import multer from "multer";
const uploadMiddleware = multer({ dest: "uploads/" })


export const singleUpload = uploadMiddleware.single();