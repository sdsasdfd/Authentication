import { Router } from "express";
import {
  login,
  logout,
  signup,
  verifyEmail,
  forgetPassword,
  resetPassword,
  authCheck,
} from "../controllers/auth.controller.js";
import { verifyToken } from "../middleware/verifyToken.js";

const router = Router();

router.get("/check-auth", verifyToken, authCheck);

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);

router.post("/verify-email", verifyEmail);
router.post("/forget-password", forgetPassword);
router.post("/reset-password/:token", resetPassword);

export default router;
