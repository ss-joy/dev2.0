"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const multer_1 = __importDefault(require("multer"));
const express_1 = require("express");
const path_1 = __importDefault(require("path"));
const storage = multer_1.default.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./files"); // Save files in the "files" directory
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
        const ext = path_1.default.extname(file.originalname); // Get the original file extension
        cb(null, file.fieldname + "-" + uniqueSuffix + ext); // Generate a filename with the original extension
    },
});
const upload = (0, multer_1.default)({ storage });
const fileUploadRouter = (0, express_1.Router)();
fileUploadRouter.post("/", upload.single("video"), async (req, res) => {
    console.log("rcved");
    res.sendStatus(201);
});
exports.default = fileUploadRouter;
