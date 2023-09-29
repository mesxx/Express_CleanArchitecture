import express from "express";
var router = express.Router();

import * as UserService from "../services/task.js";

router.get("/", UserService.getTasks);
router.get("/:id", UserService.getTaskById);
router.post("/", UserService.createTask);
router.patch("/:id", UserService.updateTask);
router.delete("/:id", UserService.deleteTask);

export default router;
