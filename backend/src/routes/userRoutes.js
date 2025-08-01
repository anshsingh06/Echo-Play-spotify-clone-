import { Router } from "express";
import { protectRoute } from "../middleware/authMiddleware.js";
import { getAllUsers, getMessages } from "../controller/userController.js";
const router = Router();

router.get("/", protectRoute, getAllUsers);
router.get("/messages/:userId", protectRoute, getMessages);

router.get("/", (req, res) => {
  res.send("User route is working");
});

export default router;