import express from "express";
const router = express.Router();
import {
  createCategory,
  getCategories,
  getCategoryBySlug,
  updateCategory,
  deleteCategory,
}  from "../controllers/categoryController.js";
  import { protect } from "../middleware/authMiddleware.js"; 
  import upload from "../middleware/upload.js";


router.get("/", getCategories);
router.get("/:slug", getCategoryBySlug);


router.post("/", protect, upload.single("image"), createCategory);
router.put("/:id", protect, upload.single("image"), updateCategory);
router.delete("/:id", protect, deleteCategory);

export default router;