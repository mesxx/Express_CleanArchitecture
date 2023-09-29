import express from "express";
var router = express.Router();

import * as UserService from "../services/user.js";

router.get("/", UserService.getUsers);
router.get("/:id", UserService.getUserById);
router.post("/", UserService.createUser);
router.patch("/:id", UserService.updateUser);
router.delete("/:id", UserService.deleteUser);

export default router;
