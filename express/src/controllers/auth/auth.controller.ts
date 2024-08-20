import type { Request, Response } from "express";
import { RefreshToken } from "../../models/refresh-token.model";
import { sign, verify } from "jsonwebtoken";
import { config } from "dotenv";
config();

const secretAccessToken = process.env.ACCESS_TOKEN_SECRET as string;
const secretRefreshToken = process.env.REFRESH_TOKEN_SECRET as string;

export async function refreshTokenController(req: Request, res: Response) {
  if (!req?.cookies?.rtoken) return res.sendStatus(401);

  const token = await RefreshToken.findOne({ token: req.cookies.rtoken });
  if (!token) return res.sendStatus(403);

  try {
    const decoded = verify(token.token, secretRefreshToken);
    //issue new access token
    const accessToken = sign(req.body, secretAccessToken, {
      //payload
      //from the decoded data
      expiresIn: "5m",
    });
    return res.json({ accessToken });
  } catch (error) {
    return res.sendStatus(403);
  }
}

export async function logoutHandler(req: Request, res: Response) {
  if (!req?.cookies?.rtoken) return res.sendStatus(204);
  //204 means it was successful but no content to return
  const token = await RefreshToken.findOne({ token: req.cookies.rtoken });

  //altough rtoken ta db te nai.
  //j rtoken e rqst e asche oitkei dlt kore dbo.
  if (!token) {
    res.clearCookie("rtoken", {
      httpOnly: true,
    });
    return res.sendStatus(204);
  }

  await RefreshToken.deleteOne({
    token: token.token,
  });
  res.clearCookie("rtoken", {
    httpOnly: true,
  });
  return res.sendStatus(204);
}
