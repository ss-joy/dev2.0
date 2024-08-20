import { Request, Response, Router } from "express";
import { orders } from "../../lib/dispense-go-dummy-data/orders";

const dispenseGoRouter = Router();
dispenseGoRouter.post("/orders", (req: Request, res: Response) => {
  // throw new Error("sei mama");
  return res.status(200).json(orders);
});
dispenseGoRouter.post("/checkout", (req: Request, res: Response) => {
  console.log(req.body);
  return res.sendStatus(201);
});

export default dispenseGoRouter;
