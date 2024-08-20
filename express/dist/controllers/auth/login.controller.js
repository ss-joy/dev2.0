"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginController = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const user_model_1 = require("../../models/user-model");
const refresh_token_model_1 = require("../../models/refresh-token.model");
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const secretAccessToken = process.env.ACCESS_TOKEN_SECRET;
const secretRefreshToken = process.env.REFRESH_TOKEN_SECRET;
async function loginController(req, res) {
    const user = await user_model_1.User.findOne({ email: req.body.email });
    if (!user) {
        return res.status(404).json("user is not signed up");
    }
    //match creds
    const accessToken = (0, jsonwebtoken_1.sign)(req.body, secretAccessToken, {
        //payload
        expiresIn: "5m",
    });
    const refreshToken = (0, jsonwebtoken_1.sign)(req.body, secretRefreshToken, {
        //payload
        expiresIn: "1h",
    });
    //save refresh token to db
    await refresh_token_model_1.RefreshToken.create({ token: refreshToken });
    res.cookie("rtoken", refreshToken, {
        httpOnly: true,
        maxAge: 1 * 60 * 60 * 1000,
    });
    return res.send({ accessToken });
}
exports.loginController = loginController;
