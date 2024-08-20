"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signUpController = void 0;
const user_model_1 = require("../../models/user-model");
const signUpController = async (req, res) => {
    const userFound = await user_model_1.User.findOne({
        email: req.body.email,
    }).exec();
    if (userFound) {
        return res.status(409).json("user is already signed up");
    }
    const dbresp = await user_model_1.User.create(req.body);
    return res.status(201).json({ dbresp });
};
exports.signUpController = signUpController;
