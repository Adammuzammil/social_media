import express from "express";
import { VerifyUser } from "../middleware/VerifyUser.js";
import {
  commentPost,
  createPost,
  deletePost,
  getAllPosts,
  getFollowingPosts,
  getLikedPosts,
  getUserPosts,
  likeUnlikePost,
} from "../controllers/post.controller.js";

const router = express.Router();

router.route("/all").get(VerifyUser, getAllPosts);
router.route("/create").post(VerifyUser, createPost);
router.route("/like/:id").post(VerifyUser, likeUnlikePost);
router.route("/likes/:id").get(VerifyUser, getLikedPosts);
router.route("/user/:userName").get(VerifyUser, getUserPosts);
router.route("/following").get(VerifyUser, getFollowingPosts);
router.route("/comment/:id").post(VerifyUser, commentPost);
router.route("/:id").delete(VerifyUser, deletePost);

export default router;
