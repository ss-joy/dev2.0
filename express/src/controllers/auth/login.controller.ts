import { Request, Response } from "express";
import { sign } from "jsonwebtoken";
import { User } from "../../models/user-model";
import { RefreshToken } from "../../models/refresh-token.model";
import { config } from "dotenv";
config();

const secretAccessToken = process.env.ACCESS_TOKEN_SECRET as string;
const secretRefreshToken = process.env.REFRESH_TOKEN_SECRET as string;

export async function loginController(req: Request, res: Response) {
  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    return res.status(404).json("user is not signed up");
  }
  //match creds

  const accessToken = sign(req.body, secretAccessToken, {
    //payload
    expiresIn: "5m",
  });
  const refreshToken = sign(req.body, secretRefreshToken, {
    //payload
    expiresIn: "1h",
  });
  //save refresh token to db
  await RefreshToken.create({ token: refreshToken });

  res.cookie("rtoken", refreshToken, {
    httpOnly: true,
    maxAge: 1 * 60 * 60 * 1000,
  });

  return res.send({ accessToken });
}
