import { Router } from "express";

export const emptyRouter = Router();
emptyRouter.get("/", (req, res) => {
  res.cookie("testing", "cookies");
  res.cookie("testingggg", "cookiessss");

  res.cookie("secure-testing", "secue cookies", {
    httpOnly: true,
  });
  res.send("ok");
});
