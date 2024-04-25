import express from "express";

import { VerifyUser } from "../middleware/VerifyUser.js";
import {
  followUnfollowUsers,
  getSugesstedUsers,
  updateProfile,
  userProfile,
} from "../controllers/user.controller.js";

const router = express.Router();

router.route("/profile/:userName").get(VerifyUser, userProfile);
router.route("/suggested").post(VerifyUser, getSugesstedUsers);
router.route("/follow/:id").post(VerifyUser, followUnfollowUsers);
router.route("/update").post(VerifyUser, updateProfile);

export default router;
