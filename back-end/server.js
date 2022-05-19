import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
import cors from "cors";

import { userRouter, productRouter, saleRouter } from "./api/routes/index.js";

// Connect to db
const dbConnection = process.env.DB_STRING_CONNECTION;
mongoose.connect(dbConnection);

// Listener to connection error
mongoose.connection.on("error", (e) => {
  console.error("ERROR: ", e);
});

//Express
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

//Routes
app.get("/", (req, res) => {
  res.send("Proyecto individual");
});

app.use("/api", userRouter);
app.use("/api", productRouter);
app.use("/api", saleRouter);

//Launch server
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log("- Initialized server -");
});
