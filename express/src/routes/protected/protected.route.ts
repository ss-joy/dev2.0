import { Request, Response, Router } from "express";
import { sendProtecteData } from "../../controllers/protected/protected.controller";
import { authenticate } from "../../middlwares/authentication/authenticate.middleware";

const protectedRouter = Router();
protectedRouter.use(authenticate);
protectedRouter.get("/", sendProtecteData);

export default protectedRouter;
