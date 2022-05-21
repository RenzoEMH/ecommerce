const API_SERVER = process.env.REACT_APP_API_URL;

const ENDPOINTS = {
  GET_ALL: "/api/product",
  GET_ONE: "/api/product",
};

export const getAllProducts = () => {
  const path = `${API_SERVER}${ENDPOINTS.GET_ALL}`;
  return new Promise((resolve, reject) => {
    fetch(path)
      .then((response) => response.json())
      .then((data) => {
        resolve({ data });
      })
      .catch((err) => {
        reject({ error: err });
      });
  });
};

export const getOneProduct = (id) => {
  const path = `${API_SERVER}${ENDPOINTS.GET_ONE}/${id}`;
  return new Promise((resolve, reject) => {
    fetch(path)
      .then((response) => response.json())
      .then((data) => {
        resolve({ data });
      })
      .catch((err) => {
        reject({ error: err });
      });
  });
};
