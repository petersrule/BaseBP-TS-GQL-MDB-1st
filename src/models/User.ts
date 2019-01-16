import { Document, Schema, model } from "mongoose";

export interface UserInterface extends Document {
  _id: String;
  username: String;
  email: String;
  password: String;
}

export const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    minlength: 4,
    maxlength: 40,
    unique: true
  },
  email: {
    type: String,
    required: true,
    minlength: 6,
    maxlength: 255,
    unique: true
  },
  passsword: {
    type: String,
    required: true,
    minlength: 10,
    maxlength: 1024
  }
});

export const User = model<UserInterface>("User", userSchema);
