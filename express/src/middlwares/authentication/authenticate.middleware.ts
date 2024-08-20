import { NextFunction, Request, Response } from "express";
import { JsonWebTokenError, verify } from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const secretKey = process.env.ACCESS_TOKEN_SECRET as string;

export function authenticate(req: Request, res: Response, next: NextFunction) {
  const aToken = req.headers?.authorization?.split(" ")[1];
  if (!aToken) {
    return res.sendStatus(401);
  }
  try {
    const ans = verify(aToken, secretKey);
    console.log(ans);
    return next();
  } catch (error) {
    if (error instanceof JsonWebTokenError) {
      return res.status(401).json({
        msg: "you are not authenticated",
        error: error,
      });
    }
  }
  return res.json("fck");
}
