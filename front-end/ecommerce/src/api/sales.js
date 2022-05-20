import axios from "axios";

const API_SERVER = "http://localhost:5000";

const ENDPOINTS = {
  CREATE: "/api/sales/create",
  GET_ONE: "/api/sales",
};

export const getAllSales = async (id) => {
  const url = `${API_SERVER}${ENDPOINTS.GET_ONE}/${id}`;
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        resolve({ data });
      })
      .catch((err) => {
        reject({ error: err });
      });
  });
};

export const createSale = async (data) => {
  const url = `${API_SERVER}${ENDPOINTS.CREATE}`;

  try {
    const response = await axios.post(url, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response;
  } catch (error) {
    return error.response;
  }
};
