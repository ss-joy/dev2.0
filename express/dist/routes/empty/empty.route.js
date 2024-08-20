"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.emptyRouter = void 0;
const express_1 = require("express");
exports.emptyRouter = (0, express_1.Router)();
exports.emptyRouter.get("/", (req, res) => {
    res.cookie("testing", "cookies");
    res.cookie("testingggg", "cookiessss");
    res.cookie("secure-testing", "secue cookies", {
        httpOnly: true,
    });
    res.send("ok");
});
