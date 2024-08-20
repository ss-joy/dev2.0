"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RefreshToken = void 0;
const mongoose_1 = require("mongoose");
const refreshToken = new mongoose_1.Schema({
    token: {
        required: true,
        type: String,
    },
});
exports.RefreshToken = (0, mongoose_1.model)("RefreshToken", refreshToken);
