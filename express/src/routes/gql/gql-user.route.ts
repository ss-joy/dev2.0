import { Request, Response, Router } from "express";
import { GqlUser } from "../../models/gql-user.model";

export const gqlUserRouter = Router();

gqlUserRouter.get("/", async (req, res: Response) => {
  const db = await GqlUser.find().exec();
  return res.json({ db });
});

gqlUserRouter.get("/:id", async (req: Request, res) => {
  const db = await GqlUser.findById(req.params.id).exec();
  if (!db) throw new Error("no record found in db");
  //@ts-ignore
  return res.json({ ...db?._doc, id: db._doc._id });
});

gqlUserRouter.post("/", async (req: Request, res) => {
  console.log(req.body);
  const db = await GqlUser.create(req.body);
  // //@ts-ignore
  return res.json({ ...db?._doc, id: db._doc._id });
});

gqlUserRouter.delete("/:id", async (req: Request, res) => {
  const db = await GqlUser.findOneAndDelete({ _id: req.params.id });
  // //@ts-ignore
  console.log(db);
  // return res.json({ ...db?._doc, id: db._doc._id });
  // return res.json({ 12: 123 });
  return res.json({ ...db?._doc });
});
