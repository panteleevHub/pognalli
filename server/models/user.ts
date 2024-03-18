import { Schema, model } from "mongoose";

const UserSchema = new Schema({
  name: String,
  age: Number,
  avatarUrL: String,
  countries: [
    {
      name: String,
      src: String,
      alt: String,
    }
  ],
  tags: [String],
  transport: [String],
  level: Number,
  likes: [Number],
  purpose: String,
  music: [String],
});

export const User = model("User", UserSchema);