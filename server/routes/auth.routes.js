import express from "express";
import {
  getMe,
  login,
  logout,
  signup,
} from "../controllers/auth.controller.js";
import { VerifyUser } from "../middleware/VerifyUser.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/signin", login);
router.post("/logout", logout);
router.route("/me").get(VerifyUser, getMe);
// router.get("/me", VerifyUser, getMe);

export default router;
