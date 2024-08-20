"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const protected_controller_1 = require("../../controllers/protected/protected.controller");
const authenticate_middleware_1 = require("../../middlwares/authentication/authenticate.middleware");
const protectedRouter = (0, express_1.Router)();
protectedRouter.use(authenticate_middleware_1.authenticate);
protectedRouter.get("/", protected_controller_1.sendProtecteData);
exports.default = protectedRouter;
