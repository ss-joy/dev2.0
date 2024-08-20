"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const main_controller_1 = require("../controllers/main-controller");
const mainRouter = (0, express_1.Router)();
mainRouter.get("/", main_controller_1.sendHistories);
mainRouter.post("/", (req, res) => {
    res.status(200).json("ok");
});
exports.default = mainRouter;
