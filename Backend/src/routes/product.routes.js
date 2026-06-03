import {
  getAllProducts,
  getSingleProduct,
} from "../controllers/product.controller.js";
import express from "express";

const router = express.Router();

router.get("/", getAllProducts);
router.get("/:id", getSingleProduct);

export default router;
