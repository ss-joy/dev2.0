"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const orders_1 = require("../../lib/dispense-go-dummy-data/orders");
const dispenseGoRouter = (0, express_1.Router)();
dispenseGoRouter.post("/orders", (req, res) => {
    // throw new Error("sei mama");
    return res.status(200).json(orders_1.orders);
});
dispenseGoRouter.post("/checkout", (req, res) => {
    console.log(req.body);
    return res.sendStatus(201);
});
exports.default = dispenseGoRouter;
