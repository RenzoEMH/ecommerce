import mongoose from "mongoose";

const { Schema } = mongoose;

const usersSchema = new Schema(
  {
    email: String,
    password: String,
    name: String,
    lastname: String,
    phone: String,
    address: String,
    document: String,
    photo: String,
    verified: Boolean,
    type: String,
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("Users", usersSchema, "users");

export default User;
