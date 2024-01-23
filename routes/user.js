import express from "express";
import { getAllUsers, getUserDetails, registerUser, specialFunc, userDelete, userUpdate } from "../controllers/user.js";

const router = express.Router();

router.get("/all",getAllUsers);

router.post("/new",registerUser);

router.get("/userid/special",specialFunc);

router.route("/userid/:id").get(getUserDetails).put(userUpdate).delete(userDelete);

// OR
// router.get("/userid/:id",getUserDetails);

// router.put("/userid/:id",userUpdate);

// router.delete("/userid/:id",userDelete);

export default router;
