import { Router } from "express";

export const gqlRouter = Router();
gqlRouter.get("/", (req, res) => {
  res.send("ok");
});
