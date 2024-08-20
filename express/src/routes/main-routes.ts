import { Router } from "express";
import { sendHistories } from "../controllers/main-controller";
const mainRouter = Router();
mainRouter.get("/", sendHistories);
mainRouter.post("/", (req, res) => {
  res.status(200).json("ok");
});

export default mainRouter;
