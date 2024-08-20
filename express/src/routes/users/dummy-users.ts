import { Request, Response, Router } from "express";
import { sendProtecteData } from "../../controllers/protected/protected.controller";
import { DummyUser } from "../../models/user-model";

export const dummyUsersRouter = Router();
dummyUsersRouter.post("/", async (req, res) => {
  const r = await DummyUser.create(req.body);
  return res.json({ r });
});
dummyUsersRouter.get("/", async (req, res) => {
  const a = await DummyUser.find({ _id: "6669fa5aa61c765eb752bccb" }).exec();

  return res.json(a[0]);
});
