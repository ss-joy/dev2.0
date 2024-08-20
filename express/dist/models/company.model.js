"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Companies = void 0;
const mongoose_1 = require("mongoose");
const companies = new mongoose_1.Schema({
    name: {
        required: true,
        type: String,
    },
    description: {
        required: true,
        type: String,
    },
});
exports.Companies = (0, mongoose_1.model)("Companies", companies);
