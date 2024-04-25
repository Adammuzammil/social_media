import express from "express";
import { VerifyUser } from "../middleware/VerifyUser";
import {
  deleteNotifications,
  getNotifications,
} from "../controllers/notification.controller";

const router = express.Router();

router.route("/").get(VerifyUser, getNotifications);
router.route("/").delete(VerifyUser, deleteNotifications);

export default router;
