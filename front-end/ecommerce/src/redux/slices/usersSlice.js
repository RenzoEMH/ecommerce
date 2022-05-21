import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  getAllUsers,
  createUser,
  login,
  updateUser,
  getOneUser,
} from "../../api/users";

const initialState = {};

export const getAllUsersAsync = createAsyncThunk("users/getAll", async () => {
  const response = await getAllUsers();
  return response.data;
});

export const getOneUsersAsync = createAsyncThunk("users/getOne", async (id) => {
  const response = await getOneUser(id);
  return response.data;
});

export const createUserAsync = createAsyncThunk(
  "users/create",
  async (user) => {
    const response = await createUser(user);
    return response;
  }
);

export const loginAsync = createAsyncThunk("login", async (user) => {
  const response = await login(user);
  return response;
});

export const updateUserAsync = createAsyncThunk(
  "users/update",
  async (user) => {
    const response = await updateUser(user);
    return response;
  }
);

export const usersSlice = createSlice({
  name: "usuarios",
  initialState,
  reducers: {
    setToken: (state, { payload: token }) => {
      state.token = token;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllUsersAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllUsersAsync.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.users = payload;
      })
      .addCase(getOneUsersAsync.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.user = payload;
      })
      .addCase(createUserAsync.fulfilled, (state, { payload }) => {
        state.created = payload.data;
      })
      .addCase(loginAsync.fulfilled, (state, { payload }) => {
        const { token } = payload.data;
        state.errorLogin = payload.data;
        state.loggued = payload.data;
        state.token = token;
        localStorage.setItem("infoUser", JSON.stringify(payload));
      })
      .addCase(updateUserAsync.pending, (state) => {
        state.updatedUser = false;
      })
      .addCase(updateUserAsync.fulfilled, (state, { payload }) => {
        state.updatedUser = payload.data;
      });
  },
});

export const { setToken } = usersSlice.actions;

export const selectUsers = (state) => state.usuarios.users;
export const selectToken = (state) => state.usuarios.token;
export const selectUserLoggued = (state) => state.usuarios.loggued;
export const errorLogin = (state) => state.usuarios.errorLogin;
export const errorCreateUser = (state) => state.usuarios.created;

export default usersSlice.reducer;
