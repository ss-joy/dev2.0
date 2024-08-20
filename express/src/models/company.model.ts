import { Schema, model } from "mongoose";

const companies = new Schema({
  name: {
    required: true,
    type: String,
  },

  description: {
    required: true,
    type: String,
  },
});

export const Companies = model("Companies", companies);
