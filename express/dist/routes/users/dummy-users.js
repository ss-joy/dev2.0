"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dummyUsersRouter = void 0;
const express_1 = require("express");
const user_model_1 = require("../../models/user-model");
exports.dummyUsersRouter = (0, express_1.Router)();
exports.dummyUsersRouter.post("/", async (req, res) => {
    const r = await user_model_1.DummyUser.create(req.body);
    return res.json({ r });
});
exports.dummyUsersRouter.get("/", async (req, res) => {
    const a = await user_model_1.DummyUser.find({ _id: "6669fa5aa61c765eb752bccb" }).exec();
    return res.json(a[0]);
});
