import mongoose from "mongoose";

const { Schema } = mongoose;

const productsSchema = new Schema(
  {
    name: String,
    price: String,
    description: String,
    photo: Array,
    type: String,
    size: Array,
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Products", productsSchema, "products");

export default Product;
