import { Schema, model } from "mongoose";

const gqlUser = new Schema({
  firstName: {
    required: true,
    type: String,
  },
  age: {
    required: Number,
    type: String,
  },
  companyId: {
    required: true,
    type: String,
  },
});

export const GqlUser = model("GqlUser", gqlUser);
