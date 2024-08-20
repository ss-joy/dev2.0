"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
function makeArray(x) {
    return [x];
}
makeArray("213");
makeArray(234);
const abcd = {
    x: "sdas",
    y: 1232,
    z: "yu",
};
const hum = {
    status: "error",
    message: "Showing list of products",
    data: { name: "sadas" },
};
hum.data.name;
const x = {
    name: "s",
    data: {},
    // age: 23,
};
const promise_1 = __importDefault(require("mysql2/promise"));
async function getConnection() {
    return await promise_1.default.createConnection({
        host: "localhost",
        user: "root",
        database: "joy",
        password: "12345",
    });
}
async function doQuery() {
    const db = await getConnection();
    const q = `
  SELECT * FROM joy;
  `;
    const q2 = `
  INSERT INTO joy () values ();
  `;
    const [ans] = await db.query(q2);
    const [anss] = await db.query(q);
    console.log(anss);
    await db.end();
}
doQuery();
