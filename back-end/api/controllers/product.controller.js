import { Product } from "../models/index.js";

export const getAllProducts = async (request, response) => {
  try {
    const products = await Product.find();
    if (products.length === 0)
      response.status(204).send({ message: "products not fund" });
    else response.status(200).json({ message: "success", products });
  } catch (error) {
    response.status(500).json({ message: "Internal server error" });
  }
};

export const getOneProduct = async (request, response) => {
  try {
    const { id } = request.params;
    const products = await Product.findById(id);
    response.status(200).json({ products, message: "success" });
  } catch (error) {
    response.status(500).json({ message: "Internal server error" });
  }
};

export const createProduct = async (request, response) => {
  try {
    const product = new Product(request.body);
    const newProduct = await product.save();
    newProduct && response.status(201).json({ newProduct, message: "success" });
  } catch (error) {
    response.status(500).json({ message: "Internal server error" });
  }
};
