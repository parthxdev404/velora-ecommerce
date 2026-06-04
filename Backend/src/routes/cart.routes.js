import express from "express";
import {
  addToCart,
  clearCart,
  getCart,
  removeCartItem,
  updateCartQuantity,
} from "../controllers/cart.controller.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/add", authMiddleware, addToCart);
router.get("/", authMiddleware, getCart);
router.put("/update", authMiddleware, updateCartQuantity);
router.delete("/remove/:productId", authMiddleware, removeCartItem);
router.delete("/clear", authMiddleware, clearCart);

export default router;
