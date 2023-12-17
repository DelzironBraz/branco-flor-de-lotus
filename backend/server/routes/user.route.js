import { Router } from "express";
import authenticateToken from '../../middlewares/auth.middleware.js';
import userController from "../controller/user.controller.js";

const router = Router();

router.get("/", authenticateToken, userController.findAll);
router.get("/:id", authenticateToken, userController.findById);
router.patch("/:id", authenticateToken,  userController.updateUser);
router.delete("/:id", authenticateToken, userController.removeUser);

export default router;