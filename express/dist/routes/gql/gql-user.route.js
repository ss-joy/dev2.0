"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gqlUserRouter = void 0;
const express_1 = require("express");
const gql_user_model_1 = require("../../models/gql-user.model");
exports.gqlUserRouter = (0, express_1.Router)();
exports.gqlUserRouter.get("/", async (req, res) => {
    const db = await gql_user_model_1.GqlUser.find().exec();
    return res.json({ db });
});
exports.gqlUserRouter.get("/:id", async (req, res) => {
    const db = await gql_user_model_1.GqlUser.findById(req.params.id).exec();
    if (!db)
        throw new Error("no record found in db");
    //@ts-ignore
    return res.json({ ...db?._doc, id: db._doc._id });
});
exports.gqlUserRouter.post("/", async (req, res) => {
    console.log(req.body);
    const db = await gql_user_model_1.GqlUser.create(req.body);
    // //@ts-ignore
    return res.json({ ...db?._doc, id: db._doc._id });
});
exports.gqlUserRouter.delete("/:id", async (req, res) => {
    const db = await gql_user_model_1.GqlUser.findOneAndDelete({ _id: req.params.id });
    // //@ts-ignore
    console.log(db);
    // return res.json({ ...db?._doc, id: db._doc._id });
    // return res.json({ 12: 123 });
    return res.json({ ...db?._doc });
});
