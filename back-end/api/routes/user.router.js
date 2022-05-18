import express from "express";
import { userCtlr } from "../controllers/index.js";
// import { validateToken } from "../middlewares/index.js";

const { registerUser, getAllUsers, login, getOneUser, updateUser } = userCtlr;

const router = express.Router();

const userRoutes = {
  LOGIN: "/auth/local/login",
  GET_ALL: "/user",
  REGISTER: "/user/register",
  GET_ONE: "/user/:id",
  UPDATE: "/user/:id",
};

router.post(userRoutes.LOGIN, login);
router.get(userRoutes.GET_ALL, getAllUsers);
router.get(userRoutes.GET_ONE, getOneUser);
router.post(userRoutes.REGISTER, registerUser);
router.put(userRoutes.UPDATE, updateUser);
export default router;
