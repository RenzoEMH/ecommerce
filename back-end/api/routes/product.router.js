import express from "express";
import { productCtlr } from "../controllers/index.js";

const { getAllProducts, getOneProduct, createProduct } = productCtlr;

const router = express.Router();

const productRoutes = {
  GET_ALL: "/product",
  GET_ONE: "/product/:id",
  CREATE: "/product/create",
};

router.post(productRoutes.CREATE, createProduct);
router.get(productRoutes.GET_ALL, getAllProducts);
router.get(productRoutes.GET_ONE, getOneProduct);
export default router;
