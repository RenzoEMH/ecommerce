import mongoose from "mongoose";

const { Schema } = mongoose;

const saleSchema = new Schema(
  {
    token: String,
    numberTransaction: String,
    client: String,
    cardNumber: String,
    paymentDate: Date,
    cardType: String,
    idUser: mongoose.SchemaTypes.ObjectId,
    totalFare: Number,
    description: String,
    productsSales: Array,
  },
  {
    timestamps: true,
  }
);

const Sale = mongoose.model("Sales", saleSchema, "sales");

export default Sale;
