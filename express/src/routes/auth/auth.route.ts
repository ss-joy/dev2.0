import { Router } from "express";
import { loginController } from "../../controllers/auth/login.controller";
import { signUpController } from "../../controllers/auth/signup.controller";
import {
  logoutHandler,
  refreshTokenController,
} from "../../controllers/auth/auth.controller";

const authROuter = Router();

authROuter.post("/login", loginController);
authROuter.post("/signup", signUpController);
authROuter.get("/refresh", refreshTokenController);
authROuter.get("/logout", logoutHandler);

export default authROuter;
