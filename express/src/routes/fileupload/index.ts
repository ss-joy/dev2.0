import multer from "multer";
import { Request, Response, Router } from "express";
import path from "path";
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./files"); // Save files in the "files" directory
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const ext = path.extname(file.originalname); // Get the original file extension
    cb(null, file.fieldname + "-" + uniqueSuffix + ext); // Generate a filename with the original extension
  },
});
const upload = multer({ storage });
const fileUploadRouter = Router();

fileUploadRouter.post(
  "/",
  upload.single("video"),
  async (req: Request, res: Response) => {
    console.log("rcved");
    res.sendStatus(201);
  }
);

export default fileUploadRouter;
