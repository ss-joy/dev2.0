import { Request, Router } from "express";
import { Companies } from "../../models/company.model";
import { GqlUser } from "../../models/gql-user.model";

export const companyRouter = Router();
companyRouter.get("/", async (req, res) => {
  const db = await Companies.find().exec();
  res.json({ db });
});

companyRouter.post("/", async (req, res) => {
  const db = await Companies.create(req.body);
  res.json(db);
});

companyRouter.get("/:companyId/users", async (req: Request, res) => {
  const db = await GqlUser.find({ companyId: req.params.companyId }).exec();
  res.json(db);
});

companyRouter.get("/:companyId", async (req: Request, res) => {
  const db = await Companies.findById(req.params.companyId).exec();
  res.json(db);
});
