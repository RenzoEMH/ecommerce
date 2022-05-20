import axios from "axios";
import { User, Sale, Product } from "../models/index.js";

export const getSalesByUser = async (request, response) => {
  try {
    const { id } = request.params;
    const sales = await Sale.find({ idUser: id });
    console.log(sales);
    if (sales.length === 0)
      response.status(400).json({ message: "sales not fund" });
    else response.status(200).json({ message: "success", sales });
  } catch (error) {
    response.status(500).json({ message: "Internal server error" });
  }
};

export const createSale = async (request, response) => {
  const { id, userId } = request.body;
  const url = `${process.env.EPAYCO_API_SERVER}${id}`;

  try {
    const axiosResponse = await axios.get(url);

    if (!axiosResponse.data.success) {
      throw new Error("Codigo de transaccion no valido");
    }

    const transactionId = axiosResponse.data.data.x_transaction_id;
    const amount = axiosResponse.data.data.x_amount;
    const signature = axiosResponse.data.data.x_signature;

    const saleExist = await Sale.findOne({ token: signature });
    if (saleExist) throw new Error("This sale is already registered");

    const userFound = await User.findById(userId);
    if (!userFound) throw new Error("No user found");
    const newSale = {
      token: signature,
      numberTransaction: transactionId,
      client: `${userFound.name} ${userFound.lastname}`,
      cardNumber: axiosResponse.data.data.x_cardnumber,
      paymentDate: axiosResponse.data.data.x_transaction_date,
      cardType: axiosResponse.data.data.x_franchise,
      idUser: userFound._id,
      totalFare: amount,
      description: axiosResponse.data.data.x_description,
      productsSales: [],
    };

    const products = await Product.find();
    const names = newSale.description.split(" || ");
    for (let i = 0; i < names.length; i++) {
      products.map((product) => {
        if (product.name === names[i]) newSale.productsSales.push(product);
      });
    }
    const sale = new Sale(newSale);
    const newSavedSale = await sale.save();
    if (!newSavedSale) throw new Error("MongoDB error");

    response.status(200).json(newSavedSale);
  } catch (error) {
    response.status(500).json({ error: error.message });
  }
};
