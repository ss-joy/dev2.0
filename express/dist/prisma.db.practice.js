"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const db = new client_1.PrismaClient();
console.log("from prisma");
db.joy.findMany().then((ans) => {
    console.log(ans);
});
db.$queryRaw `SELECT * FROM joy;`.then((ans) => {
    console.log(ans);
});
