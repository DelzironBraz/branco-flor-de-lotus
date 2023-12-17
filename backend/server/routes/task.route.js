import { Router } from "express";
import authenticateToken from '../../middlewares/auth.middleware.js';
import taskController from "../controller/task.controller.js";

const router = Router();

router.post("/:userId", authenticateToken,taskController.addTask);
router.get("/:userId", authenticateToken,taskController.findAll);
router.get("/:userId/:id", authenticateToken,taskController.findById);
router.patch("/:userId/:id", authenticateToken, taskController.updateTask);
router.delete("/:userId/:id", authenticateToken, taskController.removeTask);

export default router;