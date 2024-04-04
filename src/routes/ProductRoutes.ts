import { createProduct, getProduct, getAllProduct, updateProduct, deleteProduct } from "../controllers/ProductControllers";
import express from "express"

const router = express.Router();

router.post("/", createProduct)

router.get("/:id", getProduct)

router.get("/", getAllProduct)

router.patch("/:id", updateProduct)

router.delete("/:id", deleteProduct)

export {
    router as ProductRouter
}