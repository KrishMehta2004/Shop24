import express from "express";
import {
  forgotPassword,
  loginController,
  registerController,
} from "../controllers/authController.js";
import { adminRoles, requireSignIn } from "../middlewares/authMiddleware.js";

const router = express.Router();

// Crud Opertions

// Register
router.route("/register").post(registerController);

// Login
router.route("/login").post(loginController);

// Protected User Route
router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ success: true });
});
// Protected Admin Route
router.get("/admin-auth", requireSignIn, adminRoles, (req, res) => {
  res.status(200).send({ success: true });
});

export default router;

// forgot password
router.route("/forgot-password").post(forgotPassword);
