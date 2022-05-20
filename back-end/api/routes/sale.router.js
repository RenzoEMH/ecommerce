import express from "express";
import { saleCtlr } from "../controllers/index.js";

const { createSale, getSalesByUser } = saleCtlr;

const router = express.Router();

const saleRoutes = {
  CREATE: "/sales/create",
  GET_SALES: "/sales/:id",
};

router.post(saleRoutes.CREATE, createSale);
router.get(saleRoutes.GET_SALES, getSalesByUser);

export default router;
