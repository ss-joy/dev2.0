import { Schema, model } from "mongoose";

const refreshToken = new Schema({
  token: {
    required: true,
    type: String,
  },
});

export const RefreshToken = model("RefreshToken", refreshToken);
