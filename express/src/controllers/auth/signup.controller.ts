import type { Request, Response } from "express";
import { User } from "../../models/user-model";

export const signUpController = async (req: Request, res: Response) => {
  const userFound = await User.findOne({
    email: req.body.email,
  }).exec();
  if (userFound) {
    return res.status(409).json("user is already signed up");
  }
  const dbresp = await User.create(req.body);
  return res.status(201).json({ dbresp });
};
