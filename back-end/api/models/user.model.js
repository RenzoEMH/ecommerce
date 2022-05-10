import mongoose from "mongoose";

const { Schema } = mongoose;

const usersSchema = new Schema(
  {
    email: String,
    password: String,
    name: String,
    lastname: String,
    phone: String,
    photo: String,
    verified: Boolean,
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("Users", usersSchema, "users");

export default User;
