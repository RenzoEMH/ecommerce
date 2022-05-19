import express from "express";
import { saleCtlr } from "../controllers/index.js";

const { createSale } = saleCtlr;

const router = express.Router();

const saleRoutes = {
  CREATE: "/sales/create",
};

router.post(saleRoutes.CREATE, createSale);

export default router;
