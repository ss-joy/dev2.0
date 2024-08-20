"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logoutHandler = exports.refreshTokenController = void 0;
const refresh_token_model_1 = require("../../models/refresh-token.model");
const jsonwebtoken_1 = require("jsonwebtoken");
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const secretAccessToken = process.env.ACCESS_TOKEN_SECRET;
const secretRefreshToken = process.env.REFRESH_TOKEN_SECRET;
async function refreshTokenController(req, res) {
    if (!req?.cookies?.rtoken)
        return res.sendStatus(401);
    const token = await refresh_token_model_1.RefreshToken.findOne({ token: req.cookies.rtoken });
    if (!token)
        return res.sendStatus(403);
    try {
        const decoded = (0, jsonwebtoken_1.verify)(token.token, secretRefreshToken);
        //issue new access token
        const accessToken = (0, jsonwebtoken_1.sign)(req.body, secretAccessToken, {
            //payload
            //from the decoded data
            expiresIn: "5m",
        });
        return res.json({ accessToken });
    }
    catch (error) {
        return res.sendStatus(403);
    }
}
exports.refreshTokenController = refreshTokenController;
async function logoutHandler(req, res) {
    if (!req?.cookies?.rtoken)
        return res.sendStatus(204);
    //204 means it was successful but no content to return
    const token = await refresh_token_model_1.RefreshToken.findOne({ token: req.cookies.rtoken });
    //altough rtoken ta db te nai.
    //j rtoken e rqst e asche oitkei dlt kore dbo.
    if (!token) {
        res.clearCookie("rtoken", {
            httpOnly: true,
        });
        return res.sendStatus(204);
    }
    await refresh_token_model_1.RefreshToken.deleteOne({
        token: token.token,
    });
    res.clearCookie("rtoken", {
        httpOnly: true,
    });
    return res.sendStatus(204);
}
exports.logoutHandler = logoutHandler;
