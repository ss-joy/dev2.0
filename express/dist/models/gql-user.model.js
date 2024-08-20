"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GqlUser = void 0;
const mongoose_1 = require("mongoose");
const gqlUser = new mongoose_1.Schema({
    firstName: {
        required: true,
        type: String,
    },
    age: {
        required: Number,
        type: String,
    },
    companyId: {
        required: true,
        type: String,
    },
});
exports.GqlUser = (0, mongoose_1.model)("GqlUser", gqlUser);
