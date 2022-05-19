import { configureStore } from "@reduxjs/toolkit";
import usuariosReducer from "./slices/usersSlice.js";
import productReducer from "./slices/productSlice.js";
import saleReducer from "./slices/salesSlice.js";
import loadStateFromLocalStorage from "./preLoadState/loadStateFromLocalStorage.js";
import localStorageMiddleware from "./middleware/localStorageMiddleware";

export default configureStore({
  reducer: {
    usuarios: usuariosReducer,
    products: productReducer,
    sales: saleReducer,
  },
  preloadedState: loadStateFromLocalStorage(),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorageMiddleware),
});
