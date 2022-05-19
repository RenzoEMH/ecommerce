import axios from "axios";

const API_SERVER = "http://localhost:5000";

const ENDPOINTS = {
  CREATE: "/api/sales/create",
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
