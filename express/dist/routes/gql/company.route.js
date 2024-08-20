"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.companyRouter = void 0;
const express_1 = require("express");
const company_model_1 = require("../../models/company.model");
const gql_user_model_1 = require("../../models/gql-user.model");
exports.companyRouter = (0, express_1.Router)();
exports.companyRouter.get("/", async (req, res) => {
    const db = await company_model_1.Companies.find().exec();
    res.json({ db });
});
exports.companyRouter.post("/", async (req, res) => {
    const db = await company_model_1.Companies.create(req.body);
    res.json(db);
});
exports.companyRouter.get("/:companyId/users", async (req, res) => {
    const db = await gql_user_model_1.GqlUser.find({ companyId: req.params.companyId }).exec();
    res.json(db);
});
exports.companyRouter.get("/:companyId", async (req, res) => {
    const db = await company_model_1.Companies.findById(req.params.companyId).exec();
    res.json(db);
});
