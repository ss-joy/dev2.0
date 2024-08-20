"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gqlRouter = void 0;
const express_1 = require("express");
exports.gqlRouter = (0, express_1.Router)();
exports.gqlRouter.get("/", (req, res) => {
    res.send("ok");
});
