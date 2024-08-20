import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();

console.log("from prisma");

db.joy.findMany().then((ans) => {
  console.log(ans);
});

db.$queryRaw`SELECT * FROM joy;`.then((ans) => {
  console.log(ans);
});
