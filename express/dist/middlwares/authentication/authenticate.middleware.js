"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticate = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const secretKey = process.env.ACCESS_TOKEN_SECRET;
function authenticate(req, res, next) {
    const aToken = req.headers?.authorization?.split(" ")[1];
    if (!aToken) {
        return res.sendStatus(401);
    }
    try {
        const ans = (0, jsonwebtoken_1.verify)(aToken, secretKey);
        console.log(ans);
        return next();
    }
    catch (error) {
        if (error instanceof jsonwebtoken_1.JsonWebTokenError) {
            return res.status(401).json({
                msg: "you are not authenticated",
                error: error,
            });
        }
    }
    return res.json("fck");
}
exports.authenticate = authenticate;
